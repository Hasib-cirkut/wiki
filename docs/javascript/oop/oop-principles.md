# OOP Principles

Owner: Hasibul Huda

The basic principles of OOP consists of Abstraction, Encapsulation, Inheritance and Polymorphism.

```jsx
function Person(name, age){
  this.name = name
  this.age = age

  this.info = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
  }
}

function Student(name, age, roll){
  Person.call(this, name, age)

  this.roll = roll

  this.getRoll = function() {
    console.log("My roll is " + this.roll);
  }
}

Student.prototype = new Person()
Student.prototype.constructor = Student

const std1 = new Student("John", 12, 1)

console.log(std1.info());
```

In the above code we can see encapsulation, abstraction and inheritance working. 

- **Encapsulation**: Encapsulation is the idea of encapsulating data and the code that is working on that data. In the constructor function `Person`, we have two data name and age and a method info that uses the data to show some info.
- **Abstraction**: Abstraction is the idea of abstracting core and complex functionality so that end user doesn’t have to indulge in the inner working of a function. The object `std1` can just call `info()` to get information, the author don’t have to necessarily know how `info()` is working.
- **Inheritance:** Inheritance is the idea of inheriting parent classes attributes and methods so that code can be reused. Here std1 is a instance of Student constructor not Person but due to inheritance, std1 can access `info()` method of `Person` constructor.