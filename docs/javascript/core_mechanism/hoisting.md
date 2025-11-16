# Hoisting

Owner: Hasibul Huda

```jsx
console.log(foo);

var foo = 10

console.log(foo);
```

The expected behavior of the execution of the above code is that it’s gonna throw a `ReferenceError` because we are trying to log a variable that doesn’t exist.

But the execution of the above code block will result in: `undefined 10`.

This happens because of something called **HOISTING**. What hoisting is that JavaScript moves all the variable and function declarations to the top of it’s(variable or functions) enclosing scope. Any variable declared with `var` is initially assigned undefined. So when we write code like the above code block what it is actually is,

```jsx
var foo; //undefined by default

console.log(foo); //spits out undefined

foo = 10

console.log(foo); //spits out 10
```

But when we use `let/const` instead of `var`, we get `ReferenceError`. Because `let` when accessed before declaration will throw ReferenceError.

### Function declaration and function bodies are also hoisted to the top.

```jsx
foo() // we can call the function foo before declaring it

function foo() {
  console.log("Hello World")
}
```

Function expressions are also hoisted but just the variable. Not the function body.

```jsx
foo()

var foo = () => {
  console.log("Hello World")
}
```

**After hoisting:**

```jsx

var foo // initialized to undefined

foo() // TypeError: foo is not a function

foo = () => {
  console.log("Hello World")
}
```

If we use `let` instead of `var`, we’ll get a `ReferenceError`

```jsx
foo()

const foo = () => {
  console.log("Hello World")
}
```

**After hoisting:**

```jsx

const foo // hoisted but we can't access it before it's actual initialization

foo() // ReferenceError: Cannot access 'foo' before initialization

foo = () => {
  console.log("Hello World")
}
```