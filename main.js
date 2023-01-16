// // // # Exercice d'observation :
// // // >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console

// let content = document.querySelector('#content');
// console.log(content);

// // // // ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console

// let content = document.querySelectorAll('#content');
// console.log(content);

// // // ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console

// let important = document.querySelector('.important');
// console.log(important);

// // // ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console

// let important = document.querySelectorAll('.important');
// console.log(important);

// // // ### 5. Affiche avec l'aide d'une boucle for le contenu de chaque li avec la dernière lettre en majuscule 

// let ul = document.querySelector('ul');
// let children = ul.children;
// console.log(children);

// for (let i = 0; i < important.length; i++) {
//     console.log(important[i].innerHTML.toUpperCase());
//   }

// important.forEach(function(element) {
//     console.log(element.innerHTML.toUpperCase());
//   });

// // // ### 6. Récupère le p dont la class est "grandParagraphe" de la div id "content", tu dois ici utiliser un getElementById et un getElementsByClassName et affiche les en console log
 
let grandParagraphe = document.getElementById("content").getElementsByClassName("grandParagraphe")[0];
console.log(grandParagraphe);