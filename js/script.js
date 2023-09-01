// alert("Olá bem vindo ao biteduca");
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.addEventListener("scroll",() => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

