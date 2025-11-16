# Asynchronous JavaScript

Owner: Hasibul Huda

Must watch —> 

[https://www.youtube.com/watch?v=8aGhZQkoFbQ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

# Callback

By definition a callback is a function that is passed to another function as argument(which are called higher order function) and invoked to complete some action or routine.

```jsx
function doWork(moreWork) {
  console.log("Do Some Work")

  moreWork()
}

function moreWork() {
  console.log("Do some more work")
}

doWork(moreWork)
// Do Some Work
// Do some more work
```

Here `doWork` is a higher order function that takes another function as argument and invokes it. Passed functions can also be written as anonymous functions.

```jsx
function calculator(callback) {
  callback(10, 20)
}

calculator(function (n1, n2) {
  console.log(n1 + n2)
})
```

ES6 arrow functions make it more concise and readable.

```jsx
calculator((n1, n2) => console.log(n1 + n2))
```

There are two types of callback functions. Synchronous and Asynchronous.

## Synchronous Callbacks

Synchronous callbacks are executed at the same time as the higher order functions. These functions are invoked and executed before the higher order function finishes. So we can say, synchronous callbacks are *blocking* code. Before finishing them, the rest of the code in the HO functions can’t be completed.

```jsx
function filterItems(callbackFn) {

	console.log("Pre filter")

	callbackFn(function filterItems(callbackFn) {
  console.log("Pre filter")

  setTimeout(() => callbackFn(), 3000)

  console.log("Post filter")
}

filterItems((_) => console.log("Do some work.")))

	console.log("Post filter")

}

filterItems((_) => console.log("Do some work."))
/*
	Pre filter
	Do some work.
	Post filter
*/
```

So the “Pre filter” work is done, then the `callbackFn` is executed. Then the “Post filter” work is done.

## Asynchronous Callbacks

Asynchronous callbacks are not executed in order like synchronous callbacks. When a asynchronous callback inside a HOF is invoked, the tasks of the callback is done in the background. Meanwhile, the other code inside the HOF is executed in order.

```jsx
function filterItems(callbackFn) {
  console.log("Pre filter")

  setTimeout(() => callbackFn(), 3000)

  console.log("Post filter")
}

filterItems((_) => console.log("Do some work."))

/*
	Pre filter
	Post filter
	Do some work
*/
```

We can mimic a network call or a task that takes some time by using a `setTimeout` function which fires a function after a specified time. In this case, our callback will be fired after 3000ms or 3s. But this won’t block the code execution of the HOF. First the “Pre filter” work will be done. Then `setTimeout()` will be called and the task will be queued in the background. Meanwhile the “Post filter” work will be done. After all the work in the HOF finishes, then the callbackFn() will be resolved.

# Callback Hell

Just so it happens, we can always execute code asynchronously. Sometimes we need synchronous behaviour from functions that may run asynchronously. Let’s understand it by a real example.

Let’s say we want to get some data from our server or DB and show them inside our application. Now the data fetching task is an asynchronous task because it may take some time. But we can’t let  **showing in the application task** before our data fetching task is done.

```jsx
function showData() {
  var data = getData()

  console.log(data) // undefined
}

// this is mimicing a database call or server call
function getData() {
  setTimeout(() => {
    return [1, 2, 3]
  }, 2000)
}

showData()
```

So we call getData() and we log the result. But as `getData()` is an webAPI call, it’ll be added to the queue and `console.log(data)` will be called which will result in undefined. 

To solve this problem, we can use callbacks.

```jsx
function showData() {
  getData((data) => {
    console.log(data)
  })
}

showData()
```

By using callbacks, we are passing a function to the getData() function and saying, hey when you are finished call this function I just passed. Now it works fine. But let’s say, after getting the data we want to process it and the processing is also done in asynchronously. We can again pass a callback inside our previous callback.

```jsx
function showData() {
  getData((data) => {
    console.log("Got the Data.")
    processData((data) => {
      console.log("Processed the Data")
    })
  })
}

showData()
```

But let’s say we are working on a real life project and it has many steps to processing the data and all of this tasks are done asynchronously. What would happen if we place callbacks inside callbacks? Let’s see.

```jsx
function showData() {
  getData((data) => {
    console.log("Got the Data.")
    processData((data) => {
      console.log("Processed the Data")

      reviewData((data) => {
        console.log("Reviewed the Data")

        finalizeData((data) => {
          console.log("Finalize the Data")

          sendData((data) => {
            console.log("Sent the Data")
          })
        })
      })
    })
  })
}

showData()
```

This is famously known as **Callback Hell** or **Pyramid of Doom**. It’s hard to maintain and understand and can become easily prone to bugs.

# Inversion of Control in Callbacks

So inversion of control or IoC in computer science is a principle where control is inverted or redirected to another service or party. A very simple example of IoC’s are JS callbacks. So, before invoking the callbacks, we have full control over the code. We write the code, test it and we can expect deterministic behavior from that piece of code. But when we invoke the callbacks we pass over the control to the callback function.

Now you may think that, “well the callbacks are also written by me, so I see no problem.”

You may be right if you are working on a very small project or solving a small problem. But in real life examples, we use too many API’s and services to solve various problems. When we call these API’s or services in callbacks, we hand over the control to the callback and we may get unexpected behavior from it. We may even never hear from the callback and it’ll block our code forever.

# Promise

The Promise in JS is an Object that represents an eventual completion or failure of an asynchronous operation. When a promise is created it doesn’t know the value. So it has three states.

1. pending: Initial state.
2. fulfilled: The operation was completed successfully.
3. rejected: The operation failed.

A promise helps asynchronous method behave like synchronous methods and return a state of intention(A promise. It might be fulfilled or it might be failed). When a promise moves from `pending` to `fulfilled` or `rejected`, associated handlers(function) are called by using promises `then` method. A then method return a promise, so they can be chained together if there are more than one asynchronous tasks.

# Promise Example

```jsx
function showData() {
  getData().then((data) => {
    console.log(data)
  })
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3]), 2000)
  })
}

showData()
```

Rather than using a callback, we can create a Promise inside `getData()` method, which resolves our data. We again use `setTimeout()` to mimic database or server calls. Then, inside the `showData()` function, we call the `getData()` function. As `getData()` returns a promise, we can add a `then()` method which will be called when the `getData()` function is resolved.

This helps us get rid of the callback hell problem.

```jsx
function showData() {
  getData()
    .then((data) => {
      console.log("Got the Data.")
      return processData()
    })
    .then((data) => {
      console.log("Processed the Data.")
      return reviewData()
    })
    .then((data) => {
      console.log("Reviewed the Data.")
      return finalizeData()
    })
    .then((data) => {
      console.log("Reviewed the Data.")
      return sendData()
    })
    .then((data) => console.log(data))
}

showData()
```

As then() returns a promise, we can chain different async methods together. Now what if an error occurs which result in a rejected promise along the way? We can catch an error with the `Promise.prototype.catch()` method.

```jsx
function showData() {
  getData()
    .then((data) => {
      console.log("Got the Data.")
      return processData()
    })
    .then((data) => {
      console.log("Processed the Data.")
      return reviewData()
    })
    .then((data) => {
      console.log("Reviewed the Data.")
      return finalizeData()
    })
    .then((data) => {
      console.log("Reviewed the Data.")
      return sendData()
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err)
    })
}

showData()
/*
Got the Data.
Processed the Data.
Reviewed the Data.
Error: Can't finalizeData
*/
```

# Methods of Promise

[Promise Methods](Asynchronous%20JavaScript/Promise%20Methods%20d67a40f8e5154e30bdfdd07cf1953cf1.md)

# Problems with JS Promises

- Chaining a lot of then() methods in a complex codebase makes it harder to debug although then() method helps us get out of callback hell.
- We can’t set breakpoints in .then() methods for debugging purposes.
- Error returned from promises gives us no idea where the error occurred and can be misleading.

# Async Await

The `async` keyword is used before a function declaration making it permissible to use the `await` keyword. The `async await` is super cool syntactic sugar to already available promise based solutions. The chaining of `.then()` of promises can get real scary real quick. Async await gives a more synchronous look to asynchronous code.

```jsx
async function getData() {
  let data = await someAPIcall()

  console.log(data)
}

getData()
```

To use `await`, a function have to be an `async` function. An `async` function returns a Promise which then can be chained using `.then()`.

Error handling in `async await` is done with good old try catch blocks.

```jsx
async function getData() {
  try {
    let data = await someAPIcall()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

getData()
```

# Problems with Async Await

- First impression of async await can be misleading as it mimics synchronous programming patterns. Also, some might think that this is the next step from JS Promises. But the in reality, async await are still promises. They are just very nicely done syntactic sugar over the already available asynchronous solution.
- For independent asynchronous tasks, we still have to use Promise.all(). Only using async/await might be misleading in this aspect.
- Async await has no cancellation feature. Half way through a async await chain if we want to cancel, we can’t. Because asynchronous cancellation is not supported in JS. Generator solves this problem.

# Fetch API

The Fetch API is similar to XMLHttpRequest which provides us an interface for data fetching across networks.

Fetch provides an generic definition of Request and Response objects. For making a request we can use the `fetch()` method. Fetch has different interfaces.

- fetch()
- Headers
- Request
- Response

# fetch()

The `fetch()` method is a global method that starts the process of fetching resource from the network. It returns a promise which is fulfilled when the resource is available.

A `fetch()` promise is only rejected when there is any network error or permission error.

The `fetch()` must be provided one argument which is the argument that defines the resource that we want to fetch. Optionally, a second argument can be passed to `fetch()` which is an object containing all the custom settings. 

```jsx
const myImage = document.querySelector('img');

const myHeaders = new Headers();
myHeaders.append('Accept', 'image/jpeg');

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

const myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit)
  .then((response) => {
    // ...
  });

//snippet from MDN
```

# Headers

The Header interface allows us to modify a network before sending it. We can perform various actions such as retrieving, setting and removing headers of the request’s header.

We can retrieve a Header object via `Request.headers` and `Response.headers`.

```jsx
var myHeaders = new Headers();

myHeaders.append('Content-Type', 'text/xml');
myHeaders.get('Content-Type') // should return 'text/xml'

//snippet from MDN
```

Header interface also has various methods such as `Headers.delete()`, `Headers.entries()`, `Header.has()` etc for performing various actions.

# Throttling

Throttling is a technique that is used to limit the number of times a function can execute. Normally, when a function is written, the full control of the function is in developers hand. But in modern web, users can call API and other services with a click of a button. To refrain the user from abusing the API call, we can use throttling technique.

> In throttling, a function is invoked only once in a given interval no matter how many times the user calls it.
> 

```jsx
const btnDOM = document.querySelector("#clickme")
const counterDOM = document.querySelector("#counter")

let counter = 0
let canCall = true

counterDOM.innerHTML = counter

btnDOM.addEventListener("click", () => {
  if (canCall) {
    counter += 1

    canCall = false
    startTimer(2000)
  }

  counterDOM.innerHTML = counter
})

function startTimer(delay) {
  setTimeout(() => {
    canCall = true
  }, delay)
}
```

Here we are are checking if a user clicks a button or not. If he does, we set the `canCall` to false and start a timer with a specified `delay`. After the time has finished we just set `canCall` to true.

# Debouncing

Debouncing achieves the same as throttling but in a bit different manner. 

> In debouncing, when the user stops firing the button, a delay is started and then the function call is executed.
> 

```jsx
const btnDOM = document.querySelector("#clickme")
const counterDOM = document.querySelector("#counter")

let counter = 0
let setTimeOutID = undefined

counterDOM.innerHTML = counter

btnDOM.addEventListener("click", () => {
  clearInterval(setTimeOutID)

  setTimeOutID = startTimer(apiCall, 500)
})

function apiCall() {
  console.log("API Called")
  counter += 1
  counterDOM.innerHTML = counter
}

function startTimer(apiCall, delay) {
  return setTimeout(() => {
    apiCall()
  }, delay)
}
```

# setTimeout()

setTimeout() is one of the web API implemented by browsers. It takes a function and optionally takes a delay in milliseconds. If omitted the default delay is 0ms meaning the function will be invoked the next cycle, when the `call stack` is empty.

```jsx
console.log("First")

setTimeout(function () {
  console.log("Middle")
}, 3000)

console.log("Last")
```

The above piece of code logs “first” and “last” immediately and logs “Middle” after 3000ms or 3s. This behaviour is because of how JS handles asynchronous task using the `event queue` and `event loop`. 

If we omit the `delay` or pass `0ms` as delay, we will again get same output, because it doesn’t matter if the `setTimeout()` is finished or not, the event loop won’t pass the `setTimeout()` from event queue to `call stack` before the `call stack` is empty.

# setInterval()

`setInterval()` is another web API implemented by browser. It takes a function and optionally takes a delay. `setInterval()` repeatedly invokes the specified function with a fixed delay.

```jsx
let counter = 0

setInterval(function () {
  console.log(counter++)
}, 2000)
```

The above code increments and logs the `counter` variable each 2000ms or 2s. A `setInterval()` method returns a unique ID by which we can stop the `setInterval` by calling `clearInterval()`.

```jsx
let counter = 0

let uniqueID = setInterval(function () {
  console.log(counter++)
}, 1000)

setInterval(() => {
  clearInterval(uniqueID)
}, 5000)
```