/* Ceci est un
commentaire sur
plusieurs lignes */

// Ceci est également un commentaire de ligne unique
// console.log("Hello World!"); // Affichage d'un message dans la console

/*
// Type des variables en JavaScript :

// String  : chaîne de caractères (ou "texte")
let myVar = "Ma variable";
//console.log(myVar);
myVar =  "Mon autre variable";
//console.log(myVar);// affiche  'Mon autre variable' qui a changée.

const  PI = 3.14; // Constante, ecrite en MAJUSCULE de préférence, ne peut pas être modifiée une fois définie
//console.log(PI);

// Number  : nombre entier ou réel et opérateurs
let nombre1 = 4;
let nombre2 = 3;
let result =  nombre1 + nombre2;
console.log(nombre1 + nombre2); // Ajout de nombre1 et nombre2
console.log(nombre1 - nombre2); // Soustraction de nombre1 à nombre2
console.log(nombre1 * nombre2); // Multiplication de nombre1 par nombre2
console.log(nombre1 / nombre2); // Division de nombre1 entre nombre2
console.log(nombre1 % nombre2); // Restant de division de nombre1 entre nombre2
console.log(result);
*/
/*
// Boolean : valeur booléenne (vrai ou faux) true or false
let boolean = true;
//console.log(boolean);

// Templates string, littéraux de gabarits et concat
let test = 'test ' + myVar + 'value';
let test2 = `test ${myVar} dzqdqzd `;
//console.log = (test2);
*/

// Conditions
/*
if (nombre1 <= 3) {
  console.log('condition est vraie');
} else if (nombre1 <= 4) {
  console.log('je passe ici');
} else {
  console.log('condition fausse')
}
*/

/*
// Array   : tableau / liste de valeurs
let array = [1, 2, 3, 4, 5];
//console.log(array[0]); // Accès à l'élément du tableau par son indice, dans ce cas-ci  le premier élément est à la position 0
*/
/*
// Object  : objet associatif de paires clé-valeur
let monObjet = {
    title: "Mon Titre", 
    description: 'Ma description'
}
//console.log(monObjet.title, monObjet.description);    // Accès à la valeur associée à une clé
*/
/* Les types de données en JavaScript sont les suivants :
 * - String : chaîne de caractères (par exemple "ceci est une chaîne").
 * - Number : nombre (par exemple  42).0 ou 3.14159.
 * - Boolean : vrai ou faux (true ou false).
 * - Null et Undefined : représentent des valeurs absentes ou non définies.
 * - Object : un ensemble de propriétés et de méthodes. Un object peut être vu comme une structure de données qui associe
 *   Il peut y avoir autant deNull que vous le voulez, mais il n’y a qu’une seuleUndefined.
 * - Object : un ensemble de paires clé/valeur appelées propriétés.
 *   Un object peut contenir des méthodes qui sont des fonctions liées à cet object.
 * - Array : un tableau d’elements (comme une liste), accessible par un indice.
 */

// Les boucles : while, for, forEach, permettent de parser plusieurs éléments en même temps.
/*  //(declarationVar; condition; increment)
for (let i = 0; i < array.length; i++) { 
  console.log(array[i]);
}

array.forEach(item => {
  console.log(item);
})
*/

// Les Fonctions: on appelle des fonction avec des paramètres (arguments)
/*
function maFonction(arg1, arg2) {
  console.log("Je suis dans maFunction");
  console.log("J'ai reçu l'argument ", arg1);
  console.log("Et je l'ai transmis ", arg2);
}
maFonction('Salut', 'tout le monde');

// On peut également utiliser des arguments optionnels
function maFonctionOptionnelle(nom, prenom='Jean'){
  console.log(`Bonjour ${prenom} ${nom}`);
}
maFonctionOptionnelle('Pierre');
maFonctionOptionnelle('Paul','Jacques');

// fonction calculatrice    
function additionner(a, b){
    return a + b;
}
console.log(additionner(7, 8));
*/

// Intéragir avec le DOM (Document Object Model)   //méthode, propriété, événement
// selectors
/*
let header  = document.querySelector('header');                      //  sélecteur CSS
let btn     = document.getElementById('btn-submit');                // id d'un élément HTML 
let inputs = document.getElementsByTagName('input');                  // nom du tag html
//console.log(header);

let grids  = document.querySelectorAll('.grid');                   // class name
//console.log(grids);
*/
/*
grids.forEach(grid => {
    grid.classList.add('')  
});
*/

// événements le plus courants   : click, mouseover, keypress ...
/*
document.addEventListener('DOMContentLoaded', function(){
    console.log("DOM entièrement chargé");
});           // événement lorsque le chargement de la page  est terminé

header.addEventListener('click', function(e){
    alert('Vous avez cliqué sur le bouton !');
    e.preventDefault();             // empêche l'action par défaut associée au clic (par exemple une redirection vers un
});            // événement lorsqu’il y a un clic sur l’élément associé à cette référence d’événement

header.addEventListener('mouseenter',  function(e){
    console.log("souris entre");
});               // événement lorsqu’il y a une entrée de la souris
*/

// Insertion DOM et navigation dans le DOM
/*
let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
// console.log(header.nextElementSibling);
*/
// fin de la théorie

 /* Menu burger mobile */

 function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');
  
  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });
    
  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}
    
menuMobile();

/* Portfolio */

function tabsFilters (){
  const tabs = document.querySelectorAll('.portfolio-filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }

      console.log('AyoFraté');
      // ne sera pas pris en compte !
      /*if (filter !== elem) {
        projet.parentNode.classList.add('hide');
      } else {
        projet.parentNode.classList.remove('hide');
      }*/

      // option pour les plus motivés - opérateur ternaire
      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}

tabsFilters()

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  });

}

showProjectDetails();

// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();