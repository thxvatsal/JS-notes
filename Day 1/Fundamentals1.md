# Fundamentals Part 1

## Variables

- A variable is a “named storage” for data. 
- The convention for declaring variables in JS is - 
  ```javascript
  let message = "Hello World!";
  ```
- Multiple variables can be declared like - 
    ```javascript
    let user = "John", age = "39", message = "Hello";
    ```
- There are three keywords to declare a varible - 
  - `var`- The older scripts used var to declare a variable
  - `let` - The newer scripts use let which behaves much similar like var, but it has a deifference.
  - `const` - It declares a constant variable, meaning its value can't be changed.
- A variable can be reassigned by calling it equal to something. Like,

```javascript
let message = "hello";
message = "world!"; //message value changed
console.log(message) //run this command to check if it's changed
```

- Variable Naming -
  - They must contain only letters, digits, or the symbol `$` or `_`.
  - The first character must not be a digit.
  - For long variable names we camelCase.In camelCase, every word in the variable, except the first one. Like - 

  ```javascript
  let myVeryLongNamedVariable; // another way to declare a variable is to just iniate it and 
  myVeryLongNamedVariable = "Longest Variable Nmae ever!" // then assign value like this
  ```

  - Variables are casesensitive. `apple` and `ApplE` are different variables.
  - There are some reserved keywords that cannot be used as the name of a variable. [List to all the reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).
  
- Constants - 
  - Constants refer to the variables that can only have a constant value. They are defined like this- 
  ```javascript
  const day = "Monday";

  day = "Tuesday" // error, can't reassign the constant!
  ```
  - This type of variable is used to ensure that the values which shouldn't be reassigned or changed aren't affected by any code.

- Ethics Of Naming a Variable -
  - A variable should be named in such a way that it tells what it stores.
  - Use human-readable names.
  - Stay away from shortnames or abbreviations like `a`, `b` & `c`, unless required.