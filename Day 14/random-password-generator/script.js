const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#%^&*_+|";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");


const generatePassword = (l, initialPassword) => { //initialPassword wil contain the list of all the character we wanna use
  let pass= "";
  for (let i = 0; i<l; i++) {
    // charAt picks up a letter / element from the array as index specifies
    // a= "vatsal"
    // a.charAt(2) --> returns t
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length))
  }
  console.log(pass)
  return pass;
}

submit.addEventListener("click", () => {
  let initialPassword = empty; // ""
  /*
  if (upperCase.checked) { // .checked is a boolean property
    initialPassword += uCase;
  } else {  }
  if (lowerCase.checked) {
    initialPassword += lCase;
  }*/
  // ternary operators
  // condition ? code block : do something else
  
  upperCase.checked ? (initialPassword += uCase): "";
  lowerCase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";
  console.log(initialPassword)
  password.value = generatePassword(pLength.value, initialPassword)
  
})

copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Please generate password!");
  } else {
    password.select() // it selects text inside input boxes
    document.execCommand("copy") // copy, cut, paste // execCommand is deprecated // alternatives -->
    alert("Password copied to clipboard!");
  }
})
