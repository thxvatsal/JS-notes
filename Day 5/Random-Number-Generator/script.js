// Read -> Realise -> Write -> Reshape

// Think twice -> Code Once
// Read -> Realise -> Write -> Reshape

// Think twice -> Code Once

/*
======================================================
======================================================
//creating variables

const number = document.querySelector('.rand-numbers');
const btn = document.querySelector('.randNum-gen-btn');

//Adding click event to the button

btn.addEventListener('click' , generateNumber);

//Function to be performed when someone clicks on the button.

function generateNumber () {
    const rand = Math.floor(Math.random() * 1000 + 1);
    number.innerHTML = rand;
}


======================================================
======================================================
*/


/*
==================================================================
You can also write the above commented code in more shorter format
==================================================================
*/

document.querySelector('.randNum-gen-btn').addEventListener('click' , () => {
   document.querySelector('.rand-numbers').innerHTML = Math.floor(Math.random() * 1000 + 1);
});
