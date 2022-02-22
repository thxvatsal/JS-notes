const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

btn.addEventListener("click", calculateTip)


// .toString()
// setTimeout(func, time(in ms))

function hideError() {
  setTimeout(() => {
    error.style.display = "none"
  }, 3000)
}

function calculateTip() {
  const tip = document.querySelector(".tip")
  const bill = document.querySelector(".bill").value
  console.log(bill)
  const rate = document.querySelector(".rate").value
  console.log(rate)

  if (bill === "" || rate == "") {
    error.style.display = "block"
    hideError()
  } 
  else if (isNaN(bill)) { // it is a function that checks if the input is Not a Number --> boolean
    error.innerHTML = "Please enter a Number!"
    error.style.display = "block"
    hideError()
  }
  else {
    let tipAmount = Math.round(bill * rate)
    tip.innerHTML = `Tip Amount: ${tipAmount}`
    let totalBill = Number(bill) + tipAmount
    total.innerHTML = `Total Amount: ${totalBill}`
  }
}
