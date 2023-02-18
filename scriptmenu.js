const menuHamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".navlinks");
const burgerLine = document.querySelector(".burger");
const link = document.querySelector(".link");

menuHamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});