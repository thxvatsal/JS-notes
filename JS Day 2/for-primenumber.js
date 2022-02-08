// program to check if the input number is a prime or not

// taking the input number for checking
const number = parseFloat(prompt("Enter a number: "))
let isPrime = true // a determining variable for checking the number

// checking if number is 1
if (number == 1) {
    console.log("1 is neither prime nor composite.")
} else if (number > 1) { // check if number is greater than 1
    for (let i = 2; i < number; i++) { // looping through 2 to (number-1)
        if (number %i == 0) {
            isPrime = false;
            break
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`)
    } else {
        console.log(`${number} is a not prime number`);
    }
}
