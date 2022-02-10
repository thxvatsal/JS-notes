// Simple Calculator with if .. else if .. else statements

//Let's take input

const operator = prompt('Enter operator (either -, +, * or /');

const n1 = parseFloat(prompt('Enter the first number'));
const n2 = parseFloat(prompt("Enter the second number"));

// C++ cin >> n1;

let result;

if(operator == '-') {
  result = n1 - n2;
}

else if(operator == '+') {
  result = n1 + n2;
}

else if(operator == '*') {
  result = n1 * n2;
}

else {
  result = n1 / n2;
}

// display the result 
console.log(`${n1} ${operator} ${n2} = ${result}`);
//console.log(n1, operator, n2 , '=', result);
