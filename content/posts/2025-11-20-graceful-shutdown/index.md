---
title: "Graceful server shutdown in Go"
summary: ""
draft: true
---

Your computer runs tons of processes in the background, and pulling a socket out of a plug when it is in the middle of something is not a good idea. Doing that to your running service is also pretty risky, but this is precisely what happens when you terminate your running server via <kbd>⌃ + c</kbd> (that sends a `SIGINT` signal) or when your orchestration tool redeploys (`SIGTERM`). To be super accurate, it is probably `SIGKILL` that is more like pulling the plug out of the socket, but you get the analogy. Doing that may leave you with a messed-up state, corrupted data, a hanging database connection, or unreleased memory.

I read a number of articles about the subject and, as with everything in programming, there is more than one way to crack an egg. This is the way I ended up doing it in my recent project. The example here is a simple HTTP server, but the same technique applies to all long-running applications.

I’m relatively new to the Go language and I’m open to your critique. Now let's have a look at the programme in its entirety and then let's break it down and discuss concepts one by one.

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

## Main as a simple entry point

A good practice is to keep the entry point super minimal so the [`func main()` only calls `run()`](https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/#func-main-only-calls-run). The `main` function calls `os.Exit(1)` (this is what `log.Fatal()` calls under the hood in my example), which instantly terminates the process and ignores all `defer` functions. Extracting the program execution to the `run` function allows us to do the cleanup. Most importantly, we can easily test the entry point of our server, which is impossible to do if it was in the `main` function.

```go
func main() {
  ctx := context.Background()

  if err := run(ctx); err != nil {
    log.Fatal(err)
  }
}
```

## Run for the logic, shutdown and whatnot

The `run()` function is where the logic goes. Lets discuss a three main concepts that it is responsible for individually: running a server, registering signals and shutting down the server.

### Running a server

### Registering signals

### Shutting down server

## Resources

- [Graceful Shutdown in Go: Key Patterns you need to know!](https://youtu.be/UPVSeZXBTxI)
- [How I write HTTP services in Go after 13 years](https://grafana.com/blog/2024/02/09/how-i-write-http-services-in-go-after-13-years/#func-main-only-calls-run)
