# Polymorphism

Owner: Hasibul Huda

Polymorphism is the idea of one function doing many different things. 

Let’s say we have a function that takes some numbers as arguments and adds them. Now, the question may arise while designing the function such as, “How many values will it take?”, “What will it return?”, “In which form may it return values?” etc. So the issue here is that, the core functionality of the method is to add some numbers, but the details are different for each of the functions. So let’s say we have to design three function according to these specifications:

1. This function will take two integer values and return their sum.
2. This function will take three integers values and return their sum.
3. This function will take two string and return their concatenation.

> In all fairness there is no pure function overloading in JS because a function in JS can take any number of parameters. To mimic function overloading we have to check how many arguments have been passed and what types are they.
> 

So one solution is to write three separate function with three separate names.

```jsx
function twoInegerAdd(num1, num2){
	
	return parseInt(num1) + parseInt(num2)

}

function threeInegerAdd(num1, num2, num3){
	
	return parseInt(num1) + parseInt(num2) + parseInt(num3)

}

function twoStringConcat(str1, str2){
	
	return str1 + str2

}
```

As we can see, we had come up with three different names. What if the specification are a lot complex? This is where polymorphism comes. Polymorphism comes in two different flavours.

1. Method overloading
2. Method overriding

## Method Overloading

Method overloading is a way of creating multiple methods with same name but different parameters. So the function with the appropriate parameter will be called during runtime.

```jsx
class calculator{
  
  add(...rest){
    if( (rest[0] && rest[1] && !rest[2]) && (typeof(rest[0]) === "number" && typeof(rest[1]) === "number")){
      console.log(rest[0] + rest[1])
    }else if((rest[0] && rest[1] && rest[2]) && (typeof(rest[0]) === "number" && typeof(rest[1]) === "number" && typeof(rest[2]) === "number")){
      console.log(rest[0] + rest[1] + rest[2])
    }else if((rest[0] && rest[1]) && (typeof(rest[0]) === "string" && typeof(rest[1]) === "string")){
      console.log(rest[0] + rest[1])
    }
  }
}

let cal1 = new calculator()

cal1.add(1, 2) // 3
cal1.add(1, 2, 3) // 6
cal1.add("1", "2") // "12"
```

Here we are using spread operator of JS to take n numbers of arguments and then checking the arguments which satisfies the overloading specs.

## Method Overriding

Unlike method overloading, method overriding involves two classes. The derived class implements a method that already exists in parent class. So the derived class **overrides** the method of parent class.

```jsx
class Animal{
  
  info(){
    console.log("This is animal class")
  }
}

class Dog extends Animal{
  info(){
    console.log("This is Dog class");
  }
}

let d = new Dog()

d.info() // This is Dog class
```