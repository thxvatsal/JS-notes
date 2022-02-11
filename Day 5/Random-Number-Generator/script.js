// Read -> Realise -> Write -> Reshape

// Think twice -> Code Once

const number = document.querySelector('.count-number');

const btn = document.querySelector('.generate');

btn.addEventListener('click' , generateNumber);

function generateNumber () {
    const rand = Math.floor(Math.random() * 1000 + 1);
    number.innerHTML = rand;
}
