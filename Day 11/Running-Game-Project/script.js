// The amount of variables and functions

const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const villain = document.querySelector(".villain");

// Now that we've created variables let's create functions

const jump = () => { // ES6 method for creating functions
    if(hero.classList != "animate") {
        hero.classList.add("animate");
        villain.style.animation = "move 1s infinite linear";
    }
    // SetTimout calls a function only once
    setTimeout(() => { // to remove the animate class after .3 seconds
        hero.classList.remove("animate");
    }, 300);  // this is 0.3 seconds
}

document.addEventListener("keydown" , (e) => {
    if(e.code == "Space") {
   jump();
}
});
/*
function jump () {

}
*/ 


// We need to add the functionality of the game being over once the wolf and the boy come in contact with each other

let isAlive = setInterval(() => { // because i wanna check it every x amount of time 
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    //console.log(heroTop);
    let villainLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
    //console.log(villainLeft);

    // Let's use a statement

    if(villainLeft < 40 && villainLeft > 20 && heroTop >= 130) {
        villain.style.animation = "none";
        alert("Game over, Press space to start");
    }
}, 10); // this is 10 milliseconds
