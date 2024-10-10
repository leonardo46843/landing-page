// Nav Onscroll
window.onscroll = function () {
  const header = document.querySelector("header");
  const ceiling = header.offsetTop;

  if (window.scrollY > ceiling) {
    header.classList.add("onScroll");
  } else {
    header.classList.remove("onScroll");
  }
};

//Burger Menu
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("hidden");
});
