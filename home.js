// const menuToggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector("nav");

// menuToggle.addEventListener("click", () => {
//     nav.style.maxHeight = nav.style.maxHeight === "0px" || nav.style.maxHeight === "" ? "300px" : "0px";
// });

// const slider = document.querySelector(".image-slider");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");

// let scrollPos = 0;
// const imageWidth = 265; // Width + gap

// next.addEventListener("click", () => {
//   scrollPos += imageWidth;
//   if (scrollPos > slider.scrollWidth - slider.clientWidth) {
//     scrollPos = slider.scrollWidth - slider.clientWidth;
//   }
//   slider.style.transform = `translateX(-${scrollPos}px)`;
// });

// prev.addEventListener("click", () => {
//   scrollPos -= imageWidth;
//   if (scrollPos < 0) scrollPos = 0;
//   slider.style.transform = `translateX(-${scrollPos}px)`;
// });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active"); // Yeh line nav me 'active' class add/remove karegi
});
