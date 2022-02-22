// variables

const hero = document.querySelector(".hero");
const heroboy =  document.querySelector("hero-boy");
const villain = document.querySelector(".villain");

// score variables
const score = document.querySelector(".score");

let gameStarted = false;

// let test  = true;
// const resetNum = document.querySelector(".reset");

// functions

const jump = () => {
    if (hero.classList != "animate") {
        hero.classList.add("animate");
        villain.style.animation = "move 1s infinite linear";       
    }
    
    // if (test) {
    //     score.innerHTML++;
    // }

    // setTimeout function calls a function only once
    setTimeout(() => {
        hero.classList.remove("animate");
    }, 300);

};

document.addEventListener("keydown", (e) => {
    if (e.code == "Space"){

        gameStarted = true;
        //let initialScore = 0;
        
        score.innerHTML++  ;

       
        jump();
    } 
});

// functionality when boy clashes with wolf

let isAlive = setInterval(() => {
    
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    //console.log(heroTop);
    let villianLeft = parseInt(window.getComputedStyle(villain).getPropertyValue("left"));
    //console.log(villianLeft);
    
    if (villianLeft < 40 && villianLeft > 20 && heroTop >= 130) {
        villain.style.animation = "none";
        alert("Jack left this cruel world...", score.innerHTML = 0);
        gameStarted = false;
       // test = false;
    } // else if (villianLeft < 40 && villianLeft > 20 && heroTop < 180 && heroTop > 20  ) {
    //     score.innerHTML++;
    // }
    else if (gameStarted) {
        score.innerHTML++ 
    } 
}, 10);

