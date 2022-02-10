// We are going to create 4 variables

// The functionalities are going to be add
//  subtract, reset


const count = document.querySelector(".count");

const add = document.querySelector(".add");

const sub = document.querySelector(".subtract");

const resetNum = document.querySelector(".reset");


add.addEventListener("click" , function() {
    count.innerHTML++;
    setColor();
})

sub.addEventListener("click" , function(){
    count.innerHTML--;
    setColor();
})

resetNum.addEventListener("click" , function() {
    count.innerHTML = 0;
    setColor();
})

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green";
    }
    else if(count.innerHTML < 0) {
        count.style.color = "red";
    }
    else {
        count.style.color = "blue";
    }
}
