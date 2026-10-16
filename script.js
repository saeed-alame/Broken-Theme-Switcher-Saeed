const button = document.getElementById("toggle"); // error: id was "toggl", the button's id is "toggle"

const body = document.querySelector("body"); // error: selector was "bod"
button.addEventListener("click", toggleTheme);

function toggleTheme() { // error: the parentheses () were missing, which is a syntax error
body.classList.toggle("dark");
}