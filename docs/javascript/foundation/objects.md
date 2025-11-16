# Objects

Owner: Hasibul Huda
Verification: Verified

Objects are one of the fundamental building blocks of JavaScript. Even functions in JS are objects.

# Objects

### Ways to create objects

We can create an instance of the Object prototype to create an empty object.

```jsx
let obj = new Object()

console.log(obj) // {}
```

We can also use more simpler form of object creation.

```jsx
let obj = {}

console.log(obj) // {}
```

An object is made up of multiple members. Each member is a **Key-Value** pair. Each **Key-Value** pair is Colon ( : ) separated and each member is comma( , ) separated.

```jsx
const person = {
	name : "Dwight Schrute",
	age  : 35
}
```

So what can we add to objects? LITERALLY everything. Strings, numbers, boolean, functions, arrays, OBJECTS? you name it. Let’s see a more complex object.

```jsx
const country = {
	name : "Bangladesh",
	currency: "Taka",
	
	capital : {
		name: "Dhaka",
		population: "21,741,090"
	},
	
	places_to_visit : ["Lalbagh Fort", "Ahsan Manzil Museum"],

	sayHello: function(){
        console.log("Hello from Bangladesh");
    }
}
```

So as we can see we can have normal key-value member like name and currency. Then we can have objects inside objects like the capital which can have the same variable name as its parents. Then we can have arrays and functions.

### Accessing JS Objects

We can access JS Objects using dot notation or **C-LIKE** array notation.

```jsx
//Dot Notation
console.log(person.name) // Dwight Schrute
console.log(person.age)  // 35

//Array Notation
console.log(person["name"]) //Dwight Schrute
console.log(person["age"])  // 35
```

To access more nested object methods we can use a mixture of dot  and array notation.

```jsx
console.log(country.capital.population); // 21,741,090
```

So what we are doing is tapping into our country object and accessing the capital object member. Then we can access the population member of capital object. 

What if we want to access the first item of the array ***places_to_visit***? 

```jsx
console.log(country.capital.places_to_visit[0]) // Lalbagh Fort
```

We are first accessing the array using dot notation. Then we are accessing the first index by using array notation.

### Mutating JS Objects

We can mutate JS objects on the fly.

```jsx
person.name = "Micheal Scott"

console.log(person) // { name: "Micheal Scott", age: 35 }
```

We can also add new members on the fly.

```jsx
person.bye = function(){
	console.log("Bye Bye!")
}

person.bye() // Bye Bye!
```

### Accessing members inside functions in JS Objects

When accessing members of the object itself we have to harness the power of ***this***. So what is ***this?*** Inside an object, ***this*** refers to the object itself. We can see it in action here.

```jsx
/*
	let's change the sayHello method of the country
	object.
*/

const country = {
	...
	,

	sayHello: function(){
		  console.log("Hello " + this.name);
	}
}

country.sayHello() // Hello Bangladesh

```

Let’s printout the ***this*** itself and see what it’s actually.

```jsx
const country = {
	...
	,

	sayHello: function(){
		  console.log(this);
	}
}

country.sayHello()
/*
{
  name: 'Bangladesh',
  currency: 'Taka',
  capital: {
    name: 'Dhaka',
    population: '21,741,090',
    places_to_visit: [ 'Lalbagh Fort', 'Ahsan Manzil Museum' ],
    printThis: [Function: printThis]
  },
  sayHello: [Function: sayHello]
}
*/
```

```jsx
const country = {
	...
	,

	sayHello: function(){
		  console.log(this);
	}
}

country.sayHello()
/*
{
  name: 'Bangladesh',
  currency: 'Taka',
  capital: {
    name: 'Dhaka',
    population: '21,741,090',
    places_to_visit: [ 'Lalbagh Fort', 'Ahsan Manzil Museum' ],
    printThis: [Function: printThis]
  },
  sayHello: [Function: sayHello]
}
*/
```

So as we can see ***this*** is not a magic item but simply the object itself.

### Shallow Copy vs Deep Copy of Objects in JS

When we copy one object to another using Object.assign() we make a **shallow copy** of the object. Let’s see what that means.

```jsx
const person = {
    name: "John Doe",
    info:{
        address: "Dhaka"
    }
}

const copiedPerson = Object.assign({}, person)

copiedPerson.name = "Jane Doe"
copiedPerson.info.address = "Cox's Bazar"

console.log(person); 
// { name: 'John Doe', info: { address: "Cox's Bazar" } }

console.log(copiedPerson);
// { name: 'Jane Doe', info: { address: "Cox's Bazar" } }
```

We can see that the name member is unaffected in person object because it’s a primitive value. But the address member of the info object is changed. This is because the address object is a reference to an object in heap memory.  This is an example of **shallow copy** where some properties are connected with the original variable and some of them are disconnected. A **deep copy** is where every property is disconnected from the original object. An example of **deep copy** is given below.

```jsx
const person = {
    name: "John Doe",
    info:{
        address: "Dhaka"
    }
}

let jsonPerson = JSON.stringify(person)
const copiedPerson = JSON.parse(jsonPerson)

copiedPerson.name = "Jane Doe"
copiedPerson.info.address = "Cox's Bazar"

console.log(person);
// { name: 'John Doe', info: { address: 'Dhaka' } }

console.log(copiedPerson);
// { name: 'Jane Doe', info: { address: "Cox's Bazar" } }
```

### How Object works

Objects are essentially a collection of properties. Each property is a Key-Value pair and separated by a comma. 

```jsx
let obj = {
	name : "John Doe"
}
```

This way of creating an object is called **Object Literal.**

We can also create objects using constructor function.

```jsx
function Student(){
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function(){
      alert('Hi');
    }
}

let std1 = new Student()

console.log(typeof(std1)) //object
```

Objects are essentially based on prototypes.

So every objects( and functions since functions are objects in JS) has a property called prototype. In browser console when we create an object and try to access it using dot(.) notation we hope to find two properties, name and walk. But to our surprise we find a lot more than that.

```jsx
let obj = {
	name: "John Doe",
	walk: false
}

// In browser create the above object and try to access it by
//obj.

/*
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
name
walk
constructor
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
toValueOf
*/
```

So what are all these other values. Where do they come from?

So every object in JS has a built-in property which is called prototype. The prototype in itself is an object. So the prototype will also have a prototype of its own and so on. So we can see that there is a chain of prototypes which is intuitively called, hold onto your horses, **prototype chain**. So let’s do something. Let’s access one property from the list. Let’s access hasOwnProperty and give it a value of “name”.

```jsx
//in browser console

> obj.hasOwnProperty("name")
< true
```

So, how did that work? huh! We didn’t write some function called ***hasOwnProperty***. What happens is, when we call some property of an object in JS, JS first looks for it in the object itself, if it finds it, it returns the value. If it can’t it looks for the property in the objects prototype. If the property is still not found, prototype of prototype is searched. When the end of the chain is reached and the property is not found, undefined is returned.

In our case we tried to access hasOwnProperty in our object, when the property wasn’t found it looked for the property in the object’s prototype where it was found.

### How Objects are called

Everything in JS are called by value. Even Objects. We can prove this by this piece code.

```jsx
let series = {
    name: "Breaking Bad",
    comment: "Best of all time."
}

function changeSeries(series){
    series = {
        name: "Game of thrones",
        comment: "Had the potential but faild miserably",
    }
}

console.log(series) // { name: 'Breaking Bad', comment: 'Best of all time.' }

changeSeries(series)

console.log(series) // { name: 'Breaking Bad', comment: 'Best of all time.' }
```

So as we can see the function ***changeSeries()*** didn’t change the series object. It proves that the object was passed by value. The function ***changeSeries()*** made a copy of the series object and overwrote the original series object. Now, let’s change the ***changeSeries()*** a bit. Rather than completely overwriting the series object, let’s try to mutate it.

```jsx
let series = {
    name: "Breaking Bad",
    comment: "Best of all time."
}

function changeSeries(series){
    series.name = "The office",
    series.comment = "Best sitcom of alltime"
}

console.log(series) // { name: 'Breaking Bad', comment: 'Best of all time.' }

changeSeries(series)

console.log(series) // { name: 'The office', comment: 'Best sitcom of alltime' }
```

Huh! Interesting. So, what it is? Is it passed by value or reference? Actually it’s a bit complicated than that. When I said all parameter passing in JS is passed by value, it’s true. But there are some things we have to understand about memory management in JS.

```jsx

  series(this is the copy inside changeSeries function)
							|
							|
						  --->   name: "Breaking Bad"
	series -------->   |
							       comment: "Best of all time."
	_____           ____
	Stack           Heap 
```

Initially the variable series is placed on stack memory and the properties of it are placed on heap memory. When we call the changeSeries function and overwrite the series object, we are not accessing the heap memory, we are just replacing the variable with another object that is created in the heap memory.

```jsx

										 name: "The office"
	series -------->   |
							       comment: "Best sitcom of alltime"

										 name: "Breaking Bad"
	series -------->   |
							       comment: "Best of all time."
	_____           ____
	Stack           Heap 
```

So when we come out of the changeSeries() function scope we are accessing the original series object and it’s unchanged.

Now on the second example where the ***changeSeries()*** method was changed to mutate the object properties we are actually accessing the heap memory and changing them. So as series object(the original one in the caller scope) is logged we can see that the values have been changed

```jsx
 series(changes were made using this variable. e.g. series.name = "Something else")
							|
							|
						  --->   name: "Something else"
	series -------->   |
							       comment: "Best of all time."
	_____           ____
	Stack           Heap 
```

We can further dig this behaviour by adding a object inside in our series object.

```jsx
let series = {
    name: "Breaking Bad",
    comment: "Best of all time.",
    rating:{
        point: 5
    }
}
```

Now if we do this inside our ***changeSeries()*** function,

```jsx
function changeSeries(series){

    series.rating = {
        foo: "bar"
    }
}

console.log(series)

/*
	{
	  name: 'Breaking Bad',
	  comment: 'Best of all time.',
	  rating: { point: 5 }
	}
*/

changeSeries(series)

console.log(series)

/*
	{
	  name: 'Breaking Bad',
	  comment: 'Best of all time.',
	  rating: { foo: 'bar' }
	}
*/
```

This is expected. Although we are overwriting the rating object inside series object in ***changeSeries()*** function, the change is permanent because when we are accessing series.rating inside ***changeSeries()*** we are tapping into the heap memory.

### Objects and This

As we know, inside objects we can have functions that does things related to the objects. So more often or not the functions may have to access the variables of the objects itself. ***this*** is a keyword used for just that. 

```jsx
let movies = {
    name: "The Godfather",
    leadActorName: "Al Pacino",

    printActorName(){
        console.log(`The Godfater was played by ${this.leadActorName}`)
    }
}

movies.printActorName() // The Godfater was played by Al Pacino
```

Objects inside objects has access to itself using this. But innerObject can’t access outerObject through this.

```jsx
let countries = {
    count: 195,
    bd:{
        name: "The Republic of Bangladesh",
        currency: "Taka",
        print(){
            console.log(this.count)
        }
    },
}

countries.bd.print() // undefined
```