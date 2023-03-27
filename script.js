// ******************************************    SLIDER     **************************************

// var counter = 1;
// var slider = document.querySelector(".slider2");

// var autoslide;

// var repeatslide = () => {
// autoslide = setInterval(function(){
//     document.getElementById('s' + counter).checked = true; 
//     counter++;
   
//     if(counter > 5){
//         counter = 1;
        
//     }
// }, 2000); }

// repeatslide();

// slider.addEventListener("mouseover", () => {
//     clearInterval(autoslide);
// })

// slider.addEventListener("mouseout", () => {
//     repeatslide();
// })

document.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

const menuHamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".navlinks");
const burgerLine = document.querySelector(".burger");
const link = document.querySelector(".link");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");

menuHamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link1.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link2.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link3.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});

link4.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu');
    burgerLine.classList.toggle('mobile-menu');
});