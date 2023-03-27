var compteurtop = 0;
var compteurmid = 0;
var compteurbot = 0;
var compteurbilan0 = 0;
var compteurbilan1 = 0;
var compteurbilan2 = 0;
var compteurbilan3 = 0;

// https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve 

// ************************************************   OBSERVER CARD GAUCHE    *********************************************************

const startAnimation = (entries, observer) => {
  compteurtop++;
  if ( compteurtop <= 3){ 
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-left", entry.isIntersecting);
    });
  };

  if ( compteurtop >= 3){ 
    entries.forEach(entry => {
      entry.target.classList.toggle("slide0", entry.isIntersecting);
    });
  }};

  const observer = new IntersectionObserver(startAnimation);
  const callback = str => { console.log(str); };
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  const elements = document.querySelectorAll('#boxcontainergauche');

  elements.forEach(el => {
    observer.observe(el, options);
  });

// ************************************************   OBSERVER CARD DROITE    *********************************************************

  const startAnimation2 = (entries, observer) => {
    compteurmid++;
    if ( compteurmid <= 3){ 
      entries.forEach(entry => {
        entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
      });
    };
  
    if ( compteurmid >= 3){ 
      entries.forEach(entry => {
        entry.target.classList.toggle("slide0", entry.isIntersecting);
      });
    }};
  
  const observer2 = new IntersectionObserver(startAnimation2);
  const options2 = { root: null, rootMargin: '0px', threshold: 1 }; 
  const elements2 = document.querySelectorAll('#boxcontainerdroite');
    
  elements2.forEach(el => {
      observer2.observe(el, options2);
  });

// ************************************************   OBSERVER CARD BAS    *************************************************************

  const startAnimation3 = (entries, observer) => {
    compteurbot++;
    if ( compteurbot <= 7){ 
      entries.forEach(entry => {
        entry.target.classList.toggle("slide-in-from-bot", entry.isIntersecting);
      });
    };
  
    if ( compteurbot >= 7){ 
      entries.forEach(entry => {
        entry.target.classList.toggle("slide0", entry.isIntersecting);
      });
    }};
  
  const observer3 = new IntersectionObserver(startAnimation3);
  const options3 = { root: null, rootMargin: '0px', threshold: 1 }; 
  const elements3 = document.querySelectorAll('#boxcontainerbot');

    elements3.forEach(el => {
      observer3.observe(el, options3);
  });