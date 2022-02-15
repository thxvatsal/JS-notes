const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search() {
    const inputValue = input.value;
    const li = document.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        if(li[i].innerHTML.toLowerCase().includes(inputValue)){
            li[i].style.display = ""; // list items of i
        }
        else
        {
            li[i].style.display = "none";
        }
    }
}
