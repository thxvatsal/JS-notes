# Hello, Amazing Learners!

Today, we learnt about DOM Manipulation.

## DOM Manipulation

Document Object Model is a way of maipulating a document with JS.

1. **Adding Elements to the page**

```javascript
const body = document.body // fetches the body of the HTML
body.append("Hello world", "Bye") // adds text to the body

const div = document.createElement("div") // creating a new div element
div.innerText = 'Hello World' // adding text to the div element
div.innerHTML = <strong>I am added HTML</strong> // innerHTML allows us to add HTML elements
body.append(div) // adding the div element inside the body 
```

2. **Selecting Elements from the page**

```javascript
const element1 = document.querySelector('.className') // selects an element by a query, here classname
const element2 = document.querySelector('#id') // and here by the id of the element
const element3 = document.querySelector('elementName') // and here by the element name
```

3. **Remove Element**

```javascript
const element = document.querySelector('query')
element.remove() // this method removes the element
```

4. **Modifying Element Attributes**

```javascript
const element = document.querySelector('query')
element.id("ID") // sets the Id attribute of the element
element.removeAttribute("id") // removes attributes by name
element.style.cssproperty = "cssattribute" // access the style property and modify
```

5. **Modifying Element Classes**

```javascript
const element = querySelector("query")
element.classList // return all the classes the element contains
element.classList.className = "newClass" // adds a new class to the element
element.classList.remove("className") // removes the class by given classname
element.classList.toggle("className") // adds the classname if it isn't present, removes if present

```

## Resources
- [DOM Manipulation in 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8)

## Today's Project

- [Counter Application]()
