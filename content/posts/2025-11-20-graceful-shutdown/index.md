---
title: "Graceful server shutdown in Go"
summary: ""
draft: true
---

Your computer runs tons processes in the background, and pulling a socket out of a plug when it is in the middle of something is not a good idea. Doing that to your running service is also pretty risky, but this is precisely what happens when you terminate your running server via <kbd>⌃ + c</kbd> (that sends a `SIGINT` signal) or when your orchestratoin tool redeploys (`SIGTERM`). Doing that may leave you with super hard to debug state, corrupted data, hanging database connections or unreleased memory.

I read number or articles about the subject and as with everythig in programming, there is more than one way to crack an egg. This is the way I ended up doing it on my recent project. The exmaple here is a simple HTTP server, but the same technique applys to all long running programs. Keep in that I'm relatively new to Go language and I'm open to your critique. Let's go!

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

## Resources

- [Graceful Shutdown in Go: Key Patterns you need to know!](https://youtu.be/UPVSeZXBTxI)
-
