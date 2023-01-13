---
title: 'Concurrency in Go'
date: '2022-05-26'
excerpt: 'Using goroutines'
coverImage: 'static/images/goroutines.webp'
---

**Goroutines** are a lightweight form of concurrency in the Go programming language. They are similar to threads in other languages, but they are managed by the Go runtime rather than the operating system, making them more lightweight and efficient. In this blog post, we will learn about goroutines, how to use them, and some best practices for writing concurrent code in Go.

A goroutine is created by calling the go keyword followed by a function call. For example, the following code creates a goroutine that runs the printHello function:

```go
package main

import "fmt"

func printHello() {
    fmt.Println("Hello, World!")
}

func main() {
    go printHello()
}
```

Once a goroutine is created, it runs independently of the main function, and the program continues to execute the next line of code.

Here is an example of how to use goroutines to perform concurrent operations:

```go
package main

import (
	"fmt"
	"time"
)

func printNumbers() {
	for i := 1; i <= 10; i++ {
		time.Sleep(1 * time.Second)
		fmt.Println(i)
	}
}

func printLetters() {
	for i := 'a'; i <= 'j'; i++ {
		time.Sleep(1 * time.Second)
		fmt.Println(string(i))
	}
}

func main() {
	go printNumbers()
	go printLetters()
	time.Sleep(11 * time.Second)
}
```

In this example, the main function creates two goroutines, one that prints the numbers 1 through 10 and another that prints the letters 'a' through 'j'. The goroutines run concurrently and their output is interleaved.

One important thing to note is that, once a goroutine is created, it runs independently of the goroutine that created it. This means that the goroutine that created it will not wait for it to complete before moving on. In the example above, the main function calls time.Sleep(11 * time.Second) to wait for the two goroutines to complete before exiting.

Another important thing is that, goroutines does not have a direct way of communication. In order to communicate between goroutines, you can use channels. Channels are a way to pass data between goroutines and synchronize their execution.

Here is an example of how to use channels to pass data between goroutines:

```go
package main

import "fmt"

func sum(s []int, c chan int) {
	sum := 0
	for _, v := range s {
		sum += v
	}
	c <- sum // send sum to c
}

func main() {
	s := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(s[:len(s)/2], c)
	go sum(s[len(s)/2:], c)
	x, y := <-c, <-c // receive from c

	fmt.Println(x, y, x+y)
```


In this example, the main function creates a channel c and starts two goroutines. Each goroutine computes the sum of a half of the slice s and sends the result on the channel c. The main function receives the results from the channel and prints them.

Channels can also be used to synchronize the execution of goroutines. Here is an example of how to use channels to synchronize the execution of goroutines:

```go
package main

import (
  "fmt"
  "time"
)

func worker(done chan bool) {
  fmt.Print("working...")
  time.Sleep(time.Second)
  fmt.Println("done")

  done <- true
}

func main() {
  done := make(chan bool, 1)
  go worker(done)

  <-done // wait for the worker to finish
}
```

In this example, the main function creates a channel done and starts a goroutine. The goroutine executes the worker function and sends a value on the channel done to indicate that it has finished. The main function waits for the worker to finish by receiving a value from the channel done.


## Best practices

Here are some best practices for writing concurrent code in Go:

- Use channels to communicate between goroutines. Do not share memory by communicating.


- Channels are typed by the values they convey. You can use the same channel to send and receive values of the same type.


- By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.


- The select statement lets a goroutine wait on multiple communication operations.


- The sync package provides useful primitives, such as mutexes, for managing state.


- The context package defines the Context type, which carries deadlines, cancellation signals, and other request-scoped values across API boundaries and between processes.


## Conclusion

In this blog post, we learned about goroutines, how to use them, and some best practices for writing concurrent code in Go. If you have any questions or comments, feel free to ask.
