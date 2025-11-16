# Closures

Owner: Hasibul Huda

Closures are one of the most confusing yet powerful mechanism of JS. A closure is a combination of a function with the references of it’s lexical scope. So what is a lexical scope?

Let’s consider this piece of code.

```jsx
function parent() {
  let name = "John Doe"
  let age = 42

  function child() {
    console.log(name + " : " + age) // John Doe : 42
  }

  child()
}
parent()
```

Here, the `child` function has access to it’s enclosing scope/lexical scope, so it can access `name` and `age`. If we have function inside functions, it’ll create a chain of lexical scope where each child function will have access to the ancestor functions variables.

# Closure

When a higher order function returns another function, it creates a closure. 

```jsx
function parent() {
  let name = "John Doe"
  let age = 42

  function child() {
    console.log(name + " : " + age) // John Doe : 42
  }

  return child
}

const child = parent()

child()
```

What interesting in this example is that, rather than calling the `child` function inside the `parent` function we are returning the function. So in line, `let child = parent()`

we are executing parent function. Then we are calling the `child` function. But the `parent` function is already executed and it’s variables should have been destroyed. But this is not the case for closures. Because of lexical scoping, the `child` function has a memory of what it’s `parents` variable was and ***it has access to those variables even after the `parent` function has finished executing***. This makes for a great stateful example using functions and closures.

```jsx
function counter(params) {
  let value = 0

  function inc() {
    value += 1
    console.log(value)
  }

  function dec() {
    value -= 1
    console.log(value)
  }

  return [inc, dec]
}

const [inc, dec] = counter()

inc() // 1
inc() // 2
inc() // 3
dec() // 2
```

As we can see, both the function `inc()` and `dec()` has access to their lexical environment and can access the same `value` variable. 

> Closures create a weak encapsulation. So the value variable is actually private variable that is only accessible by the methods `inc()` and `dec()`.
>