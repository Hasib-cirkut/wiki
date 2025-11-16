# JS is Single Threaded Synchronous

Owner: Hasibul Huda

We know that JS is single threaded. That means, it can do one thing at a time. We can easily see a demonstration of it by using the JS `alert()` function. When the `alert()` is called, whole UI is blocked and we can’t do anything else before quitting the `alert()` method. But we also have functions like `setTimeout()` and `setInterval()` which seems to run in the background. We also have asynchronous calls which runs in the background and resolves to a promise when the work is finished. So if JS is single threaded, how is it possible? 

Well, JS runtime is single threaded. Meaning, the browser engine that runs the JS code such as Chrome’s V8 or Firefox’s SpiderMonkey can do one thing at a time. But the browser isn’t only the runtime. It has some other things such as webAPIs, callbackQueue and the event loop.

WebAPIs are kind of hidden threads that we can’t access explicitly but we can call. Some webAPI examples are `setTimeout()`, `setInterval()` etc.

```jsx
console.log("Hi")

setTimeout(()=>{
	console.log("Inside setTimeout")
}, 5000)

console.log("Bye")
```

So in the above piece of code, the first `console.log()` goes to stack and it gets resolved and “Hi” gets logged in the browsers console. Then the `console.log()` is popped from the stack. Then the `setTimeout()` goes to the stack.

Now, `setTimeout()` is not something that is implemented in core JS. Meaning, JS doesn’t have the implementation of `setTimeout()`. It’s a webAPI that is given to us by browser. So when the stack gets an webAPI, the webAPI starts to execute in the background and the `setTimeout` gets popped from stack. While the webAPI is resolving the second `console.log()` comes to stack, gets resolved, logs “Bye” in the browser and gets popped from the stack. Meanwhile when the webAPI gets resolved, it directly doesn’t appear in the stack. It then gets queued in task queue. This is where  `Event Loop` comes into play. **When the stack is empty, the event loop takes a task from task queue and places it in the stack.** This is how event loop helps achieve asynchronicity.

# Event Loop

So every operation in JS first goes to the `call stack`. Whenever an operation is done, that operation is popped from the call stack. Whenever there is a `webAPI` operation in the call stack, it gets transferred to the `browserAPI`. `browserAPI` has these function built into them. So they start their own single threaded operation. After the `browserAPI` return the result of the work it was doing, it gets to the event queue, where it waits in the line to get back to the call stack. The event loop facilitates this process. When the `call stack` is empty, it dequeues the event queue and places the operation in `call stack`.