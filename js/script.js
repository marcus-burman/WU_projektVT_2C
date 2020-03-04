const menuIcon = document.querySelector (".hamburgare");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("change");
})