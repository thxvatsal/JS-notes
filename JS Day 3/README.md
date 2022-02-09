# Arrays

Arrays are data structures that can store multiple values at once.

The syntax of Arrays looks something like this

```javascript
VariableType VariableName = [arrayBody];
```

Let's look at an example
```javascript

const words = ["Hello" , "World" , "Welcome to LW3"];
console.log(words);
```
## Here are different types of arrays
```javascript
const myList = [];  // Empty array

const numArray = [1,2,3,4,5]; // Number array

const stringArray = ["eat" , "sleep" , "code" , "repeat"]; // string array

const types = ["eat" , "excercise" , 1 , true]; // mixed array
```

### Note : The index starts from 0 not 1
```javascript
const array = ['a' , 'e' , 'i', 'o' , 'u'];
//             0 ,  1  ,  2 ,  3  ,  4        indices
//             1 ,  2 ,  3,  4 ,  5           elements
```

## Inbuilt Functions

### Add elements to an array using inbuilt functions
There are two inbuilt functions that add elements to an array
- The first one is the push() function.
Push method is used to add elements at the end of an array

- Here is an example for better understanding.
```javascript
let dailyActivities = ['eat' ,  'sleep'];

dailyActivities.push('Toilet'); 

console.log(dailyActivities);
```

- The second one is the unshift function.
Unshift is used to add elements in the beginning of an array

- For example
```javascript
let dailyActivities = ['eat' ,  'sleep'];

dailyActivities.unshift('Toilet');

console.log(dailyActivities);
```


### Change the elements of an array using inbuilt functions

 You can also add elements or change the elements by accessing the index value.

```javascript
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';
console.log(dailyActivities); // This will print ['eat', 'sleep', 'exercise']
```

Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. 
For example :

```javascript
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';

console.log(dailyActivities); // This will print ["eat", "sleep", undefined, "exercise"]
```

Basically, if you try to add elements to high indices, the indices in between will have undefined value.

### Remove an element using inbuilt functions

You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value. 
For example:

```javascript
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']
```

If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element.
For example:

```javascript
let dailyActivities = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities); // ['eat', 'sleep']
```

### find the length of an array using inbuilt functions

You can find the length of an element (the number of elements in an array) using the length property.
For example:
```javascript
const dailyActivities = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2
```


## Resources to learn:

[Programiz](https://www.programiz.com/javascript/array)

[Youtube](https://youtu.be/oigfaZ5ApsM)
