---
title: "Graceful shutdown in Go"
summary: "The process of a graceful shutdown in the Go application can be overwhelming. Here is the flow that I recently implemented in my application and works flawlessly."
draft: true
---

Your computer runs tons of processes in the background, and pulling a plug out of a socket when it is in the middle of something is not a good idea. Doing that to your running service is also pretty risky, but this is precisely what happens when you terminate your running server via <kbd>⌃ + c</kbd> (that sends a `SIGINT` signal) or when your orchestration tool redeploys (`SIGTERM`). To be super accurate, it is probably `SIGKILL` that is more like pulling the plug out of the socket, but you get the analogy. Doing that may leave you with a messed-up state, corrupted data, a hanging database connection, or unreleased memory.

I have read a number of articles about the subject and, as with everything in programming, there is more than one way to crack an egg. This is the way I ended up doing it in my recent project. The example here is a simple HTTP server, but the same technique applies to all long-running applications.

I’m relatively new to the Go language and I’m open to your critique. Now let's have a look at the code in its entirety and then break it down and discuss concepts one by one.

```go
package main

import (
  "context"
  "errors"
  "log"
  "net/http"
  "os"
  "os/signal"
  "syscall"
  "time"
)

func createServer() *http.Server {

  return &http.Server{
    Addr: ":8080",
    Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
      time.Sleep(10 * time.Second)
      w.Write([]byte("OK"))
    }),
  }
}

func run(ctx context.Context) error {
  srv := createServer()

  chServer := make(chan error, 1)

  log.Println("Starting server on :8080")
  go func() {
    if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
      chServer <- err
    }
    close(chServer)
  }()

  ctxSignal, stop := signal.NotifyContext(ctx, os.Interrupt, syscall.SIGTERM)
  defer stop()

  select {
  case <-ctxSignal.Done():
    log.Printf("Server shutting down due to signal: %v", context.Cause(ctxSignal))
  case err := <-chServer:
    log.Printf("Server error: %v", err)
    return err
  }

  ctxTimeout, stop := context.WithTimeout(context.Background(), 5*time.Second)
  defer stop()

  if err := srv.Shutdown(ctxTimeout); err != nil {
    log.Printf("Server shutdown failed: %v", err)

    if closeErr := srv.Close(); closeErr != nil {
      log.Printf("Server close failed: %v", closeErr)
      return errors.Join(err, closeErr)
    }

    return err
  }

  log.Println("Server exited gracefully")
  return nil

}

func main() {
  ctx := context.Background()

  if err := run(ctx); err != nil {
    log.Fatal(err)
  }
}
```

## Simple entry point

A good practice is to keep the entry point super minimal so that the [`func main()` only calls `run()`](https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/#func-main-only-calls-run). The `main` function calls `os.Exit(1)` (this is what `log.Fatal()` calls under the hood in my example), which instantly terminates the process and ignores all `defer` functions. Extracting the program execution to the `run` function allows us to do the proper cleanup. Most importantly, we can easily test the entry point, which is impossible if it is in the `main` function.

```go
func main() {
  ctx := context.Background()

  if err := run(ctx); err != nil {
    log.Fatal(err)
  }
}
```

## Logic, setup, shutdown and whatnot

The `run()` function is where the logic goes. Let's discuss the three main concepts that it is responsible for individually: running a server, registering termination signals and shutting down the server.

### Running a server

I’m skipping the implementation of the `createServer` as this is not the subject of this post. The interesting part about running the server is the fact that we run it in a goroutine. The potential error that the `ListenAndServe` function can throw cannot be directly returned at this point, so we push it to a channel. This part is going to be important in the next step.

Another thing worth paying attention to is the `http.ErrServerClosed` that the Go server returns when it shuts down. Since this is precisely what we want, we don't want to treat it as an application error.

```go
srv := createServer()

chServer := make(chan error, 1)

log.Println("Starting server on :8080")
go func() {
  if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
    chServer <- err
  }
  close(chServer)
}()
```

### Registering signals and pausing the execution

Here we are creating a new copy of the `context` that we passed down from the `main` function, which will close its `Done()` channel when one of the listed signals arrives. We are interested in `SIGINT` and `SIGTERM`, but Go comes with a safer, platform-agnostic version of `SIGINT` under the `os.Interrupt` constant.

With all that, we are able to pause the execution of an application, and wait until the first of the cases is ready. Then we react accordingly by returning an `err` to the `main` caller if it comes from the server, or we continue the execution in the case of system signal registration. Beauty!

```go
ctxSignal, stop := signal.NotifyContext(ctx, os.Interrupt, syscall.SIGTERM)
defer stop()

select {
case <-ctxSignal.Done():
  log.Printf("Server shutting down due to signal: %v", context.Cause(ctxSignal))
case err := <-chServer:
  log.Printf("Server error: %v", err)
  return err
}
```

### Shutting down server

If on the previous step the application didn’t return an error, we can proceed to the graceful shutdown. Here the only interesting part is the new `context` that will terminate the application if the graceful shutdown doesn't return on its own within a timeout duration. In the case of my example, it is 5 seconds. In the end, we return `nil` to the main entry point and our application smoothly shuts down.

```go
ctxTimeout, stop := context.WithTimeout(context.Background(), 5*time.Second)
defer stop()

if err := srv.Shutdown(ctxTimeout); err != nil {
log.Printf("Server shutdown failed: %v", err)

if closeErr := srv.Close(); closeErr != nil {
  log.Printf("Server close failed: %v", closeErr)
  return errors.Join(err, closeErr)
}

return err
}

log.Println("Server exited gracefully")
return nil
```

As said before, there is a lot of ways for doing the same, but this is what works for me. Having setup like that in place gracefully handles common scenarios.

- Errors out (`1`) on server failure
- Errors out (`1`) on shutdowns that exceeded context timeout
- Returns successfully (`0`) when terminated via `SIGINT` or `SIGTERM`

I hope you learnt a thing or two. I certainly did while I was working on this article. Stay safe 👋

---

## Helpful resources

- [Graceful Shutdown in Go: Key Patterns you need to know!](https://youtu.be/UPVSeZXBTxI)
- [How I write HTTP services in Go after 13 years](https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/#func-main-only-calls-run)
- [Signal (IPC) on Wikipedia](<https://en.wikipedia.org/wiki/Signal_(IPC)>)
