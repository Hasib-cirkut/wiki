# Functions

Owner: Hasibul Huda

## Function Creation

We can create functions using the function keyword.

```jsx
function sayHello(){
    console.log("Hello")
}

sayHello() // "Hello"
```

We can pass parameters to function. They are normally **pass by value** for primitive values and pass by reference for Objects.

```jsx
// Caller Scope
let a = 1
let b = 2 

function changeNumbers(a, b){
    a = 100
    b = b*2 // Function Scope
}

changeNumbers(a, b)

console.log(a, b) // Caller Scope. log will be: 1 2
```

But when we pass an object into a function, any modification to that object inside the function scope will modify the object in the caller scope.

```jsx
const obj = {
    name: "Michael Scott"
}

function changeObj(obj){
    obj.name = "Dwight Schrute"
}

changeObj(obj)

console.log(obj) // { name: 'Dwight Schrute'}
```

This happens because although the object is passed as reference pointing to some values in heap memory.

## Function Expressions

We can create anonymous functions which doesn’t contain names.

```jsx
const sayBye = function (){ console.log("Bye!") }
sayBye() // Bye!
```

## Function Scope

Variables defined inside a function can’t be accessed from anywhere outside the function. This is because of the local scope of the function.

```jsx
function parent(){
	
  const age = 40
  
  function child(){

    console.log(age)
  }
  
  return child
}

const child = parent()

child()
```

## Closures

Functions in JS are first class citizen. Meaning they can be passed around like any variable and we can create functions inside functions. The inner function has access to all the members of outer function. But the outer function can’t access the inner functions properties. This sorts of creates an **soft** **encapsulation** for the inner function. When used this can be a powerful feature to leverage.

```jsx
function someFunction(){
    let a = 10 // Local Scope #1

    function someOtherFunction(){
        const b = 10 // Local Scope #2
    }

    console.log(b)
		// Outer function doesn't have access to inner function
		// Throws an ReferenceError
}

someFunction()
```

Closures can retain information about parent functions even after the parent functions execution has ended.

```jsx
function counterApp(){
	let count = 0
  
  return function (){
  	count++
    console.log(count)
  }
}

const count = counterApp() // Parent functions execution has ended

count() // 1
count() // 2
count() // 2
```

Even after the line `const count = counterApp()`, invoking `count` will remember the lates count value and use it. If this looks too familiar as to `useState` hook from `React.js`, that is because hook in React uses closure greatly.