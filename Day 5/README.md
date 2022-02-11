# Hello, Amazing learners!

Today, we learnt about some Math modules which help in felicitating mathematical operations. Also we built a [Random Number Generator](https://github.com/vatsal-boy/JS-notes/tree/main/Day%205/Random-Number-Generator)

## Math Module

1. **Math.PI**

**PI** - This method returns the value of PI

```javascript
console.log(Math.PI) // logs 3.141592653589793
```

2. **Math.max() & Math.min()** 

**max & min** - This methods returns max or min number from the list of the numbers provided respectively

```javascript
console.log(Math.max(1,2,3,4,5,6,7,8,9)) // logs 9
console.log(Math.min(1,2,3,4,5,6,7,8,9)) // logs 1
```

3. **Math.pow(x,y)**

**pow** - This method returns the exponential of a number

```javascript
console.log(Math.pow(2, 3)) // logs 8 which is equal to 2^3 // pow(x,y) returns x^y
```

4. **Math.round(x)**

**round** - This method returns the rounded number

```javascript
console.log(Math.round(10.999)) // logs 11 // rounds to nearest integer
```

5. **Math.abs(x)**

**abs** - This method reurns the absolute value/mod of a number

```javacscript
console.log(Math.abs(-10.52569)) // logs 10.52569 // abs returns the positive counterpart of the number
```

6. **Math.trunc(x)**

**Trunc** - This method returns the integral part of the number

```javascript
console.log(Math.trunc(6.524)) // logs 6 // returns only the integral part of the number
                               // if a.bcd is a number, this will return a
```

7. **Math.random()**

**Random** - This method reurns a random number between 0 to 1

```javascript
console.log(Math.random()) // returns a random number between 0 to 1
```

**A special formula to generate random number in a range**
```javascript
const max=8
const min=5
console.log(Math.floor(Math.random() * (max-min + 1))+ min)
```
8.**Math.floor(x)**

**Floor Function** - A function which returns biggest integer smaller than the number.

```javascript
console.log(Math.floor(10.528)) // logs 10
cosnole.log(Math.floor(-10.528)) // logs -11
```

9. **Math.ceil(x)**

**Ceiling Function** - A function which returns smallest integer bigger than the number.

```javascript
console.log(Math.ceil(10.528)) // logs 11
console.log(Math.ceil(-10.528)) // logs -10
```

## **Resources**

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math#static_methods)
