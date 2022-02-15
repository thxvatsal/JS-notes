const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  const len = word.length;

  const start = word.substring(0, Math.floor(len/2)).toLowerCase();
  const end = word.substring(len - Math.floor(len/2)).toLowerCase();
  const flip = end.split("").reverse().join("");
 

  if(start == flip) {
   result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
   result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
}
