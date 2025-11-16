# Prototypical Inheritance

Owner: Hasibul Huda

Although JavaScript isn’t a Object oriented programming based language, it has its ways of replicating inheritance through prototype chain.

## Constructor Function

Before understanding inheritance in JavaScript, let’s learn a bit about a new way to create object in JavaScript. We already know the object literal way of creating objects.

```jsx
let obj = {} // object literal syntax
```

We can create objects using another way which is known as ***constructor function***. 

```jsx
function Person(){
	this.name = "John Doe"
}

let p1 = new Person()

console.log(p1) // { name: 'John Doe'}
```

So what happens here?

Whenever we use the `new` keyword to create an object, a constructor function gets called. In our case the function Person() gets called.

> Notice the Capitalized first character of the function `Person()`. It’s a convention to use capitalized first character for classes in programming. Although, JS doesn’t have classes(literally), this convention is maintained for constructor functions and ES6 classes.
> 

This initiates couple of things.

1. Creates an empty object.
2. The **`*this*`** keyword refers to the object itself.

We can also pass parameters to a constructor function, making it more generic and reusable.

```jsx
function Person(name){
	this.name = name
}

let p1 = new Person("John Doe")
let p2 = new Person("Jane Austin")

console.log(p1) // { name: 'John Doe'}
console.log(p2) // { name: 'Jane Austin'}
```

Notice how we are now creating two objects `p1` and `p2` from the same constructor function `Person()`. Although these two objects originate from the same constructor function, they have different values and changing one object won’t affect the other. ***This creates a weak form of encapsulation.***

## Inheriting properties

By using the prototype chain JS object can access its prototype and its properties and so on.

```jsx
function Person(name, age){
  this.name = name
  this.age = age
}

const p1 = new Person("John Doe", 18)
const p2 = new Person("Sherlock Holmes", 32)

Object.defineProperty(Person.prototype, "type", {
  value: "Homo Sapinens"
})

console.log(p1) // { name: 'John Doe', age: 18 }
console.log(p1.type) // Homo Sapiens

console.log(p2) // { name: 'Sherlock Holmes', age: 32 }
console.log(p2.type) // Homo Sapiens
```

In the above code we create an object using `constructor function` named `Person`. Then we create a new object from the Person constructor which has two properties as `Person` is defined.

Next, we create two new Object `p1` and `p2` from our `Person` constructor. `p1` and `p2` are two different objects that ***share the same prototype***. We can see that in action when we set a new property to our constructors prototype in these lines,

```jsx
Object.defineProperty(Person.prototype, "type", {
  value: "Homo Sapinens"
})
```

Because the two objects originated from the same constructor, any property that is added to the constructors prototype will be available to any object that is created using the constructor. In our case, `p1` and `p2` can access the `type` property.

In other words, `p1` and `p2` share the same prototype. We can see that in action here,

```jsx
console.log(Object.getPrototypeOf(p1) === Object.getPrototypeOf(p2)) // true
```

## Inheriting methods

Inheriting methods are similar to inheriting properties but it’s not similar to OOP methods. Any functions can be added to an object in the form of a property. Because this gets binded to the object while the object gets created, this will refer to the object itself. This will let us do some cool things, like this,

```jsx
function Person(name){
  this.name = name
}

const p1 = new Person("John Doe")
const p2 = new Person("Jade Smith")

Person.prototype.walk = function(){
   console.log(`${this.name} is walking!`);
}

p1.walk() // John Doe is walking!

p2.walk() // Jade Smith is walking!
```

Because `p1` and `p2` both share the same prototype, adding any functions or properties to that prototype will be available to both and the **`*this*`** inside the function will point to the object itself.

![constructor_inheritance.png](/img/js/constructor_inheritance.png)