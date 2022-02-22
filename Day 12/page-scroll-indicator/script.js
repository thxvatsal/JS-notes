// We have to fulfill two requirements here
// The first one is the sticky navigation bar 
// The second thing that we are supposed to do is to create the page scroll indicator

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
})

// toggle () = > adds the classlist if it already exist'and removes it if it doesn't exist'

window.onscroll = () => scrollProgress();

function scrollProgress() {
    const currentState = document.body.scrollTop || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // scrollHeight returns height of content enclosed in an html element
    // clientHeight returns height of including the padding in pixels
    //console.log(pageHeight);
    const scrollPercentage = (currentState / pageHeight) * 100;
    // multiply it in 100 to get it's percentage.

    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}
