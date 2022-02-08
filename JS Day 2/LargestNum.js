const num1 = parseFloat(prompt("Enter the first number : "));
const num2 = parseFloat(prompt("Enter the second number : "));
const num3 = praseFloat(prompt("Enter the third number: "));
let largest;

// Let's check the condition 
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// Let's display the lagest number now 
console.log("The largest number out of these three is " + largest);
console.log("Wtf is wrong with you largest " + largest)