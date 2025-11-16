# Classes

Owner: Hasibul Huda

A class is a blueprint for an object. We can think of classes like a template for creating objects. In pure OOP languages, classes are everything. In JS, before ES6 we had to create a constructor function. Starting ES6 we have syntax for creating class.

Before ES6

```jsx
function Person(name, age){
	this.name = name
	this.age = age
}

Person.prototype.info = function(){
	console.log(this.name + " " + this.age)
}

let p = new Person("John", 10)
p.info()
```

After ES6

```jsx
class Person{
	constructor(name, age){
		this.name = name
		this.age = age
	}

	info(){
		console.log(this.name + " " + this.age)
	}
}

let p = new Person("John", 10)
p.info()
```

Although the new syntax has very similar approach to pure OOP languages like Java, but classes are just special function. We can be sure of that by using `typeof`.

```jsx
console.log(typeof Person)
```