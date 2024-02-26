const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav")

hamburger.addEventListener('dbclick',toggleMenu);

function toggleMenu() {
    nav.classList.toggle("active");
}