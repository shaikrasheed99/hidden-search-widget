const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
    container.classList.toggle("active");
});