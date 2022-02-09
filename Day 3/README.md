# Hello, Amazing Learners

Today we learnt about functions, objects & arrays in Javascript. The examples we gone through lies inside the Day 3 folder.

## **Functions**

A function is a block of code that performs a specific task. It helps in divinding a complex problem into smaller tasks. The syntax for declaring a function is-
```javascript
function nameOfFunction () {
    // function body
}
```
- The `function` keyword initiates a function.
- The body of a function is enclosed inside the `{}`.


### **Calling a function**

A can be called in the following way- 
```javascript
// declaring a function named greet

function greet () {
    console.log("Hello there!")
}

// calling the function
greet()
```

Declaring a function doesn't execute itself. To execute a function, we call it seperately.

Another way of declaring a function is -
```javascript
// the functon is stored in a variable
// and is identified as the name of that variable

let foo = function () {
    // function block
}

// calling the function
foo()
```

### **Functions with Parameters**

When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.

```javascript
// program to print the text
// declaring a function
function greet (name) { // declaring that the function
    console.log(`Hello ${name} :`)
}

// initiating an input
let name = prompt("Enter a name: ")

// calling function
greet(name) // this is an argument that we have passed into the function

```

### **Function Return**

The `return` statement can be used to return the value to a function call. The `return` statement denotes that the function has ended. 

```javascript
function greeet () {
    // function body
    return something
}

greet()
```

### **Benefits of using a function**

- Reusable
- Divides the program in small chunks
- Increased Readability


### **Example Code** 

```javascript
// program to find the sum of all the numbers upto --

function sumUpto (upper) {
    // using for loop
    let sum = 0
    for (let i = 1; i <=100; i++) {
        sum+=i
    }
    return sum
}
let upper = parseFloat(prompt("Enter the number upto which we have to add: "))
console.log(sumUpto(upper))

```

## **Variable Scope**

Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

- Global Scope
- Local Scope

### **Global Scope**

A variable declared at the top of a program or outside of a function is considered a global scope variable.

The value of a global variable can be changed inside a function. 

**Note**: It is a good practice to avoid using global variables because the value of a global variable can change in different areas in the program. It can introduce unknown results in the program.

### **Local Scope**

A variable can also have a local scope, i.e it can only be accessed within a function.

### **`let` is Block Scoped**

The `let` keyword is block-scoped (variable can be accessed only in the immediate block).

## **Objects**

JavaScript object is a non-primitive data-type that allows you to store multiple collections of data. Here is the syntax to declare an object- 
```javascript
// object creation
const objectName = {
    key1: 'value1',
    key2: 'value2'
}
```

These `key:value` pairs are called **properties** of an object

### **Accessing object properties**

We can access value of a property by using its key.

- **Dot Notation** - 
```javascript
objectName.key
```
- **Bracket Notation** -
```javascript
objectName["propertyName"]
```

### **Object Methods**

A JavaScript method is a property containing a function declaration. For example,
```javascript
const person = {
    name: 'Sam',
    age: 30, 
    greet: function() {
        console.log("Hello, there!")
    }
}
// calling a method
person.greet() // hello
```

#### **Adding properties and methods**

```javascript
// creating an object
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // hello
```

#### **`this` keyword**

To access a property of an object from within a method of the same object, you need to use the this keyword.

In order to access the properties of an object, this keyword is used following by . and key.

```javascript
// creating an object
let student = { 
    name = 'John',
    greet: function() {
        console.log(`Hello, ${this.name}`)
    }
};

// accessing the method
student.greet(); // hello
```

If it is under any random function, it then refers to global objects like window and global.

### **Constructor Functions**

In JavaScript, a constructor function is used to create objects.

```javascript
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();
```

It is considered a good practice to capitalize the first letter of your constructor function.

### Object Literal vs Constructor Function

- Object are used when you only want to create a single object. While constructor function can be used to create more.
- Each object created by constructor function is unique.

### **Prototype Function**

You can also add properties and methods to a constructor function using a prototype.

```javascript
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person1.gender); // Male
console.log(person2.gender); // Male
```

### Built-in Methods

```javascript
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object
```

### **Getter and Setter**

In JavaScript, there are two kinds of object properties:

- Data properties
- Accessor properties

#### **Data Properties**

The data we have entered in an object is called data property.

#### **Accessor Properties**

These are the properties that get or set the value of an object.
For that, we use two keywprds- 
- `get` - defines a getter method
- `set` - defines a setter method

**Getter method** - 

```javascript
const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
```

**Setter Method** -
```javascript
const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
```
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
//             1 ,  2 ,   3,   4,    5        elements
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

## **Resorces**

- [Programiz Array](https://www.programiz.com/javascript/array)
- [Programiz Functions](https://www.programiz.com/javascript/function)
- [Programiz Objects](https://www.programiz.com/javascript/object)
- [Javascript Arrays](https://www.youtube.com/watch?v=oigfaZ5ApsM)
- [Objects & Classes](https://www.youtube.com/watch?v=8yjkWGRlUmY&t=78s)
