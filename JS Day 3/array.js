// program to remove item from an array

function removeItemFromArray(array, n) { // we declare a function with two arguments here 
    const newArray = [];                 // and then we create a new array here
 
    for ( let i = 0; i < array.length; i++) {    // here we are running a loop from 0 up until the length of the array parameter
        if(array[i] !== n) {                    // using the if statement we are saying if the array of i which is assigned in the loop is not strict equal to n
            newArray.push(array[i]);           // then add the element to newArray
        }
    }
    return newArray;                        // return the new array using the return statement
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);      // We store the function result

console.log(result);  // Here we are printing th result in return

/*
Summary :

In the above program, an item is removed from an array using a for loop.

Here,

The for loop is used to loop through all the elements of an array.
While iterating through the elements of the array, if the item to remove does not match with the array element, that element is pushed to newArray.
The push() method adds the element to newArray.

*/