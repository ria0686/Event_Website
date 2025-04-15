

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.style.maxHeight = nav.style.maxHeight === "0px" || nav.style.maxHeight === "" ? "300px" : "0px";
});