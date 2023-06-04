const theme = document.getElementById("switch");
const main = document.getElementById("bg");
const h1 = document.getElementById("title")

theme.addEventListener("click", function(){
    main.classList.toggle("dark");
    h1.classList.toggle("h1")
});