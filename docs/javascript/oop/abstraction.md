# Abstraction

Owner: Hasibul Huda

Abstraction in OOP is a way to hide unnecessary details and reduce complexity of the software by only showing the functionality that is needed and helps user avoid writing low level code.

There is no abstract class in JS. But we can replicate abstraction using JS prototypes.

```jsx
function Animal() {
  if(this.constructor === Animal){
    throw new Error("Can't Initiate Abstract Class")
  }
}

//let dog = new Animal() // Throws error saying can't initiate abstract class

//Constructor for Dog class
function Dog(){
  Animal.call(this)
}

//Constructor for Cat class
function Cat(){
  Animal.call(this)
}

//Creating Inheritance Through prototypes
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

Dog.prototype.say = function(){
  console.log("Bark!");
}

//Creating Inheritance Through prototypes
Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.say = function(){
  console.log("Meaw!")
}

let dog = new Dog()
let cat = new Cat()

dog.say() // Bark
cat.say() // Meaw
```

The Animal Class is working as an abstraction for Dog Class and Cat Class. The Animal Class can’t be initiated as it is an abstraction. It has a say method. By using prototype we are creating inheritance and extending Animal Class to Dog and Cat Class. 

But creating inheritance in JS is not as straightforward as pure OOP languages like Java or Ruby. ES6 introduces a syntactic sugar for object oriented programming pattern in JS. It still uses functions under the hood. The same code can be written using ES6 syntax like this.

```jsx
class Animal{
  constructor(){
    if(this.constructor === Animal){
      throw Error("Can't Initiate Abstract Class")
    }
  }

  say(){
    throw Error("Abstract Method can't be called")
  }
}

class Dog extends Animal{

  say(){
    console.log("Bark!");
  }
}

class Cat extends Animal{
  say(){
    console.log("Meaw!");
  }
}

let dog = new Dog()
let cat = new Cat()

dog.say()
cat.say()
```