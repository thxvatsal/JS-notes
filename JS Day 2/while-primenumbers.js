// program to check the prime number using while loop

// taking user input
const number = parseFloat(prompt("Enter a number: "))
let isPrime = true // the toggle variable for prime or not
let i = 2 // iterator
while( i < number ) { // limiting i to number-1
    if (number % i == 0) { // checking if the remainder is 0 for any number less than number
        isPrime = false // if the remainder is 0, isPrime is set to false
        break
    } else {
        i++ // for this iteration, we might not catch a number which divides, there may be
            // other number, so we continue to check
        continue
    }
}
if (isPrime) {
  console.log(`${number} is a prime number`)
} else {
  console.log(`${number} is not a prime number`)
}
