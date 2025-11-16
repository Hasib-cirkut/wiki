# Inheritance

Owner: Hasibul Huda

Inheritance is one of the most powerful features of OOP. Inheritance allows developers to inherit code from other classes of modules which results in reduce in code redundancy and a sense of hierarchy. In JS, inheritance was achieved through its prototype chain. ES6 added more easier ways to achieve the same inheritance by introducing keywords like `extends`.

```jsx
class Employee{
  constructor(name, age, role){
    this.name = name,
    this.age = age,
    this.role = role
  }

  showInfo(){
    console.log(`Employee name: ${this.name} | age: ${this.age}`)
    console.log(`Employee Role: ${this.role}\n`)
  }
}

class SoftwareEngineer extends Employee{
  constructor(name, age, role){
    super(name, age, role)
  }
}

class QAEngineer extends Employee{
  constructor(name, age, role){
    super(name, age, role)
  }
}

let john = new SoftwareEngineer("John", 18, "Backend Engineer")
let jane = new SoftwareEngineer("Jane", 36, "Lead QA Engineer")

john.showInfo()
jane.showInfo()
```

First we are creating an `Employee` class. Then we are creating two other classes `SoftwareEngineer` and `QAEngineer` which are inheriting `Employee` class and it’s methods. As both derived classes are inheriting `Employee` class, we can use the `showInfo()` method to show information about each of the classes objects different informations.