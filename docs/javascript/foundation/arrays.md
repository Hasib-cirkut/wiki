# Arrays

Owner: Hasibul Huda

## Create an Array

```jsx
let names = ["John Doe", "Jim Morrison"]

console.log(names) // ["John Doe", "Jim Morrison"]
```

Unlike C or Java we can have different kinds of items in  the same array

```jsx
let info = [
    "John Doe",
    10,
    {
        type: "Object"
    }
]

console.log(info); // [ 'John Doe', 10, { type: 'Object' } ]
```

## Accessing Array elements

We can access array elements using array notation similar to C or Java

```jsx
console.log(info[0], info[1]) // John Doe 10
```

We can also use `Array.prototype.at()` function to access certain array element. It also accepts negative values meaning negative integers count back from the last item.

<aside>
💡 Be careful about using `Array.prototype.at()` at production level code as some browser doesn’t support it yet (I’m looking at you IE11 👀)

More about browser support here: [https://caniuse.com/?search=Array.at](https://caniuse.com/?search=Array.at)

</aside>

```jsx
console.log(info.at(-1)) // { type: 'Object' }
```

## Iteration in Array

We can use various ES6 methods to iterate over an array. Most popular one is `Array.map()`

```jsx
let countries = [
    "Bangladesh",
    "India",
    "Bhutan"
]

countries.map(country => {
    console.log(country)
})
/*
	Bangladesh
	India
	Bhutan
*/
```

It iterates over each element in the Array and fires a **CallBack** **Function.**

We can also use forEach method to loop over an array.

```jsx
countries.forEach(country => {
    console.log(country)
})
/*
	Bangladesh
	India
	Bhutan
*/
```

Wait. They look exactly the same and works the same!

Actually not true. The main difference between `Array.map()` and `Array.forEach()` is that `Array.map()` creates a copy of the main array and return an array. Whereas `Array.forEach()` works on the original array and doesn’t return anything.

```jsx
const result = countries.forEach(country => country)

console.log(result) // undefined
```

But if we try the same thing with `Array.map()` we can see the difference.

```jsx
const result = countries.map(country => {
    return country
})

console.log(result) // [ 'Bangladesh', 'India', 'Bhutan' ]
```

`Array.map()` is most useful when we want an array with some modification to each array item.
Let’s say we have an array of numbers

```jsx
const nums = [10, 20, 30]
```

And we want an array where each array element is multiplied by 2

```jsx
const doubleNums = nums.map(num => num * 2)

console.log(doubleNums) // [20, 40, 60]
```

# How array works

In JS Arrays are list-like objects whose prototype has some built-in methods to traverse and mutate the arrays. 

Arrays don’t have any fixed size. So arrays length can be changed at runtime and their data is saved in non-contagious fashion in memory. 

Arrays can’t use strings as element indexes. Array element indexes must be integers.

Using an index that doesn’t exist will return ***undefined***. 

```jsx
const names = ["John Doe", "Jim Morrison"]

console.log(names[2]) // undefined
```

# How arrays are passed around

Arrays are passed as reference in JS(Same as like Objects). 

```jsx
const countries = [
    "Bangladesh",
    "India",
    "Bhutan"
]

function changeArray(arr){
   arr[0] = 0
}

console.log(countries) // [ 'Bangladesh', 'India', 'Bhutan' ]

changeArray(countries)

console.log(countries) // [ 0, 'India', 'Bhutan' ]

```

If we mutate our state directly inside the `changeArray()` function, then the changes will be persistent because, the items of the array are stored in various non contagious locations in heap memory. So when we directly mutate array objects rather than overwriting the whole array, the change is permanent with the caller scope variable.

Rather than mutating if we overwrote the array, the change will not persist with the caller scope array. This happens because by assigning a new array to the passed array reference we break the original reference and now our `arr` array points to a new array in the heap memory.

```jsx
const countries = [
    "Bangladesh",
    "India",
    "Bhutan"
]

function changeArray(arr){
   arr = [1, 2, 3] // This creates
}

console.log(countries) // [ 'Bangladesh', 'India', 'Bhutan' ]

changeArray(countries)

console.log(countries) // [ 'Bangladesh', 'India', 'Bhutan' ]
```

# Arrays and this

First let’s take a look at this bit of code

```jsx
const countries = [
    "Bangladesh",
    "India",
    "Bhutan",
    {
        age: 42,
        log: function(){
          console.log(this);
        }
    },
    log
]

function log(){
  console.log(this)
}
```

We have an array named `countries` which has some elements. 4th element is an object which has a log function that prints out `this`. Let’s try to invoke that function to see what that yields.

```jsx
countries[3].log() // { age: 42, log: [Function: log] }
```

As the `log` function closes over the object, `this` in this context points to the object itself. Hence we can access the object properties `age` and `log` function itself.

Now, notice that we created another function which logs `this` with same name `log` but it lives outside the `countries` array, essentially in the global scope. Then we added the `log` function to the array as array element. What’ll happen when we revoke the function? Let’s see.

```jsx
countries[4]()
/*
[
  'Bangladesh',
  'India',
  'Bhutan',
  { age: 42, log: [Function: log] },
  [Function: log]
]
*/
```

Aha. Interesting. What happens is, as the `log` function is an array element and it closes over the array itself, it points to the array element hence we can access the whole array.