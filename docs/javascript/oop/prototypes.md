# Prototypes

Owner: Hasibul Huda

Before understanding JS prototypes, let’s first refer to `classes` in OOP. Classes are the blueprints upon which we create objects. Everything in OOP languages are objects and every object is a instance of some class.

Now comparing to OOP languages, JS is a functional language. JS also have the idea of objects but it’s not similar to OOP objects. To understand prototypes we must first understand JS Objects. This article assumes that reader knows what JS objects are, how to initiate one etc.

<aside>
💡 Prototypes are the mechanism by which JavaScript objects inherit features from one another.

</aside>

Reference: [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

So, MDN says Prototypes are mechanisms and that’s true. Prototypes are mechanisms, ways we can replicate inheritance in JS. 

> **Functions in JS are objects.**
> 

So in JS, when we create a object, an default object is assigned to it as it’s prototype. We can say that a parent is set but we shouldn’t take it literally because JS isn’t a pure OOP language. To make sense of what we are talking about, we can create an empty object and use the dot notation to check if it got any properties or not.

```jsx
let obj = {}

console.log(obj.toString()) // '[object Object]'
```

Although the object we created had no properties initially, when the object was created a default prototype had been set. We can print the prototype using `obj.__proto__`.

```jsx
console.log(obj.__proto__)
```