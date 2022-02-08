# Hello, Amazing learners

We went through the if else statements, logical operators, for loops, while loops, break statements nad continue statements today and it's best if these are taught in examples which is being uploaded in the files in the Day2 folder.

But for those of you who want to revise these concepts here are the notes and examples we studied during the session.

## If-Else Statements

// The syntax of If else statements looks like this 

```javascript
if (condition) {
 code block or statement
}
```

 Let's write a program that allows vatsal to drive if he is 18 years old or more
```javascript
const vatsal = 18;

if(vatsal >= 18) {
    console.log("You can drive vatsal");
}
else {
console.log("I know you just got a new car buddy but you're still underaged");
}
```

## For Loops
Loops are used to repeat a block of code.

For loops are used when we know how many times the [iteration](https://en.wikipedia.org/wiki/Iteration) of a code has to be done. The syntax for initiating for loop is- 

```javascript
for (initialExpression; condition; updateExpression) {
    // for loop body
}
```
- Intitial Expression - It is the starting state for a loop, generally we use numbers here.
- Condition - It is the condition where the loop should break and stop.
- Update Expression - It states how the initial expresion should be update so that it reaches the end condition.

Let's write a code to write "Abbas Is Cool!" 5 times- 
```javascript
for (let i = 1; i <= 10; i++) // i++ is short form for i+=1 or i = i+1
{
    console.log("Abbas Is Cool")
}
```

Oops we printed Abbas Is Cool 10 times. Guess he is too cool. 

## While Loops

While loops are used when we don't know how much iteration we have to perform. The syntax for while loop is-

```javascript
while (condition) {
    // body of loop
}
```
- Condition - Here the condition specifies the state at which the loop should break and stop.

Let's write a code to write "Abbas Is Cool!" 5 times now with while loop-

```javascript
let i = 1

while (i <= 5 ) {
    console.log("Abbas Is Cool!")
}
```

P.S. - We missed do...while loops today.

## Break Statement

The `break` statement is used to terminate the loop immediately when it is encountered.

Let's write a program to print number from 1 to 10 but nothing should be printed after 4 -

```javascript
for ( let i = 1; i <= 10; i++) {
    // break condition
    if (i == 5) {
        break // break the loop
    } 
    console.log(i)
}
```

## Continue Statement

The `continue` statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.

Let's write a program to print number from 1 to 10 but 4 should not be printed-

```javascript
for ( let i = 1; i <= 10; i++) {
    // continue condition
    if (i == 4) {
        continue // skips this iteration to start over, ignores code below
    } 
    console.log(i)
}
```

## Here are the resources used in today's lesson
- [Operators](https://www.programiz.com/javascript/comparison-logical)
- [If-else](https://www.programiz.com/javascript/if-else)
- [For Loops](https://www.programiz.com/javascript/for-loop)
- [While Loops](https://www.programiz.com/javascript/while-loop)
- [Break Statement](https://www.programiz.com/javascript/break-statement)
- [Continue Statement](https://www.programiz.com/javascript/continue-statement)

## Some extra resources that i personally used when learning these concepts:
[Youtube](https://www.youtube.com/watch?v=IsG4Xd6LlsM&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax&index=7)

[Youtube](https://www.youtube.com/watch?v=vaZpDYOuprA&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=8&t=748s)

[Youtube](https://youtu.be/ULNJSTSJc7s)
