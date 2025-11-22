# Interview Notes(JS and Vue.js)

### JavaScript Basic

1. Green | DS

```jsx
const items = [1, 2, 3]
const result = items.forEach(item => item*2)

console.log(result) // ??
```

1. Green | DS

```jsx
const items = [1, 2, 3]
const result = items.map(item => item*2)

console.log(result) // ??
```

1. Yellow | Closure | Scoping

```jsx
for(var i=0; i<3; i++){
	setTimeout(() => {
  	console.log(i) // ??
  })
}
```

1. Yellow | DS

```jsx
[1, 2, 3].forEach(item => {
	if(i == 2) break
  
  console.log(item) // ??
})
```

1. Yellow | Hoisting

```jsx
console.log(i)
sum(10, 10)
multiply(2, 2)

var i = 5

function sum(a, b){
	console.log(a + b)
}

var multiply = function (a, b) {
	console.log(a * b)
}
```

1. Yellow | Scoping | Block Scope

```jsx
let number = 5

{
  let number = 10
  
  console.log(number) // ??
}

console.log(number) // ??
```

1. Is JavaScript Single Threaded or Multithreaded? Green | Js runtime
    
    Answer: JavaScript is single threaded.
    

1. Is JavaScript synchronous or asynchronous? Green | Js runtime
    
    Answer: In it’s bare form JavaScript is synchronous. But we can do asynchronous tasks using JS Event loop and browser web API.
    

1. What is browser web API? Green | JS asynchronicity 
    
    Browser web API are set of API provided to JS by browser engine. Most used browser web APIs are, `setTimeout(), alert(), setInterval(), fetch()`
    

1. Green | JS asynchronicity

```jsx
console.log(1) // ??

setTimeout(() => {
	console.log(2) // ??
}, 0)

console.log(3) // ??
```

1. Green | JS asynchronicity | Web API

```jsx
function getTodo(){
	const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  
  console.log(result) // ??
}
```

1. Green | JS asynchronicity | Web API | Promise

```jsx
function getTodos(){

const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')

const todo2 = fetch('https://jsonplaceholder.typicode.com/todos/2')

const todo3 = fetch('https://jsonplaceholder.typicode.com/todos/3')

// Let's assume these 3 calls are dependent on each other.
// How to make these 3 calls synchronous ?
}
```

// ----------follow up questions -----------//

// Can we do it using .then() chaining and callbacks()
// What are the problems we will face if we use .then()

1. Yellow | Asynchronous | fetch | promises | promise.all

```jsx
function getTodosConcurrently(){

const todo1 = fetch('https://jsonplaceholder.typicode.com/todos/1')

const todo2 = fetch('https://jsonplaceholder.typicode.com/todos/2')

const todo3 = fetch('https://jsonplaceholder.typicode.com/todos/3')

// How to make these 3 calls run concurrently ?
}

// -----------------Answer------------------ //

async function getTodosConcurrently(){

const promises = [
fetch('https://jsonplaceholder.typicode.com/todos/1'),
fetch('https://jsonplaceholder.typicode.com/todos/2'),
fetch('https://jsonplaceholder.typicode.com/todos/3')
]

const promiseReturns = await Promise.all(promises)
const result = await Promise.all(promiseReturns.map(async (item) => await item.json()))

console.log(result)
}

getTodosConcurrently()
```

14

```jsx
let person = {
	username: 'Micheal Scott',
	intro: () => {
		console.log(`Hello I'm ${this.username}`)
	}
}

person.intro()
```

```jsx
function someFunction(){

}

const someFunction = () => {

}
```

15

```jsx
try {
	if(42 % 2 === 0){
  	throw new Error("Hello World But with an error")
  }
  
  console.log("Hello world")
} catch (e) {
	console.log('here', e)
} finally {
	console.log("Ended")
}
```

### Vue.js

1. If you have 4 level deeply nested children component, how would you pass data from level 1 to level 4. Green
    
    > Prop passing. Better answer is using store.
    > 
2. I want to click a button in level 4, but I want a function to be called in level 1. How can I do it? Green
    
    > Use `emit()`
    > 
3. Difference between `mounted` and `created` lifecycle. Green
4. Difference between `v-if` and `v-show` Green
5. What’s the purpose of `:key` in `v-for` Green
6. What are computed properties? Green
7. Difference between watchers and computed properties Green
8. Reverse a name and display it in the DOM Green
[shorturl.at/kBLY5](http://shorturl.at/kBLY5)
9. Reactivity caveats in Vue. Yellow
    
    > Vue 2 can’t detect object property addition or deletion. Same for array property set using index. We have to use `Vue.set()`
    > 
10. Why would you use a `beforeDestroy()` hook? Yellow
    
    > For cleanup. Sometime we may need to use a third party library. And when we are done, we have to destroy the instance of the library. It saves the app from potential memory leak.
    > 
11. Why would I use computed properties over regular functions? Yellow
    
    > Computed properties are cached. They useful when we want a derived, calculated state that is being used in different places.
    > 
12. What is store in vue? Why do we need store? Yellow

### CSS

Place the items according to right side mockup using css. Green

```html
<div class="wrapper">
    <ul class="list">
        <li>input-1</li>
        <li>input-2</li>
        <li>input-3</li>
    </ul>
    <button>Submit</button>
</div>
```

How to set `margin-bottom: 10px` to each items without the last item? Yellow

Answer: 

```css
li:not(:last-child) {
  margin-bottom: 10px;
}

/* or */

li:not(:nth-last-child(1)) {
  margin-bottom: 10px;
}
```

### JavaScript Problem Solving

1. Green | String

```jsx
const string = "Hello World"

// Write a function to reverse the string `string`
// expected answer: "dlroW olleH"
```

1. Yellow | Loops | Map

```jsx
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function f(nums, target){
	
	// write your code here

}

// ----------follow up questions -----------//

/*
1. What is the time complexity of current solution?
2. Can we do better then Big O(n^2)
*/
```

[SQL](https://www.notion.so/SQL-f0e618b6eb9e4d60880ee57ed065077c?pvs=21)

[Comp Sci.](https://www.notion.so/Comp-Sci-fa6d9b82bb4541d7997f7d01ce3c728b?pvs=21)

1. Write a function that takes a string as input and returns the reverse of that string. Example:
    
    ```
    const string = "Hello World"
    
    function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
    console.log(reverseString(string)); // expected output: "dlroW olleH"
    
    ```
    
2. Given an array of integers `nums` and an integer `target`, write a function `twoSum` that returns an array of the indices of the two numbers in the array that add up to the target. Example:
    
    ```
    function twoSum(nums, target) {
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }
    
    console.log(twoSum([2, 7, 11, 15], 9)); // expected output: [0, 1]
    
    ```
    
3. What is the difference between `let` and `var` in JavaScript? Give an example of a situation in which you would use `let`.
4. What is currying in JavaScript? Provide an example of how you might use currying.
    
    ```
    function add(a) {
      return function(b) {
        return a + b;
      }
    }
    
    console.log(add(2)(3)); // expected output: 5
    
    ```
    
5. Write a function that uses a callback to get the total of an array of numbers. The function should accept an array of numbers and a callback function. Example:
    
    ```
    function getTotal(numbers, callback) {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      callback(total);
    }
    
    getTotal([1, 2, 3, 4, 5], function(total) {
      console.log(total); // expected output: 15
    });
    
    ```