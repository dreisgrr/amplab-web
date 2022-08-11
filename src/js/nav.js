import $ from "jquery";

const hamburger = $(".hamburger");
const navLinks = $(".nav-links");
const links = $(".nav-links li");

hamburger.on("click", () => {
  console.log("test");
  navLinks.toggleClass("open");
  links.forEach((link) => {
    link.toggleClass("fade");
  });
});

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggleClass("open");
//   links.forEach((link) => {
//     link.classList.toggleClass("fade");
//   });
// });
