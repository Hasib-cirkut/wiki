# Prototype Chain

Owner: Hasibul Huda

When we create a object in JS, it is automatically assigned a prototype which can be accessed using `obj.__proto__`. The prototype itself is an object, hence it also has a prototype of it’s own which can also be accessed by `obj.__proto__`. Prototype of prototype may also have a prototype hence creating the prototype chain. Prototype chain ends when a prototypes `__proto__` is null.

When we try to access an objects property or method using dot notation, JS first looks for the property in the object itself. If it can’t find it, it goes through the prototype chain and calls or returns it.

```jsx
const myObject = {
	name: "John Lennon"
}
```

```jsx
myObject                 Object.prototype                
				---__proto__---> hasOwnProperty() ---__proto__---> null
name                     toString()
													
```

This piece of code logs every prototype in the objects prototype chain.

```jsx
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
```