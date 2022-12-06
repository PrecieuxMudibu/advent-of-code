import { data } from "./data.js";

let lettreAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// let data = [
//   "vJrwpWtwJgWrhcsFMMfFFhFp",
//   "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
//   "PmmdzqPrVvPwwTWBwg",
//   "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
//   "ttgJtRGJQctTZtZT",
//   "CrZsJsPPZsGzwwsLwLmpwMDw",
// ];
let priorite = 0;

function diviserEnDeuxCompartiments(tableau) {
  let moitieTableau = tableau.length / 2;
  let compartimentGauche = tableau.slice(0, moitieTableau);
  let compartimentDroit = tableau.slice(moitieTableau, tableau.length);
  const compartiments = [compartimentGauche, compartimentDroit];
  return compartiments;
}

function diviserTableau(tableau, partie) {
  let tableauDesTableaux = [];
  let tableauDeTroisChaines = [];
  for (let i = 0; i < tableau.length; i++) {
    tableauDeTroisChaines.push(tableau[i]);
    if (tableauDeTroisChaines.length === partie) {
      tableauDesTableaux.push(tableauDeTroisChaines);
      tableauDeTroisChaines = [];
    }
  }

  return tableauDesTableaux;
}

function premierePartie(tableau) {
  let priorite = 0;
  for (let i = 0; i < tableau.length; i++) {
    let sacActuel = tableau[i];
    const compartiments = diviserEnDeuxCompartiments(sacActuel);
    const compartimentGauche = compartiments[0];
    const compartimentDroit = compartiments[1];

    let lettreDejaTrouve = false;
    for (let k = 0; k < compartimentGauche.length; k++) {
      // console.log('LETTRE',compartimentGauche[k])

      if (lettreDejaTrouve === false) {
        for (let j = 0; j < compartimentDroit.length; j++) {
          if (compartimentGauche[k] === compartimentDroit[j]) {
            console.log("TROUVE", compartimentGauche[k]);
            priorite += lettreAlphabet.indexOf(compartimentGauche[k]) + 1;
            lettreDejaTrouve = true;
            break;
          }
        }
      }
    }
  }
  return priorite;
}

function deuxiemePartie(tableau) {
  let tableauDesTableaux = diviserTableau(data, 3);
  let priorite = 0;

  let lettreDejaTrouve = false;
  for (let i = 0; i < tableauDesTableaux.length; i++) {
    let tableauActuel = tableauDesTableaux[i]; // Tableau à trois éléments
    console.log("tableauActuel   ", tableauActuel);
    let chaine1 = tableauActuel[0];
    let chaine2 = tableauActuel[1];
    let chaine3 = tableauActuel[2];
    let lettreDejaTrouve = false;

    for (let j = 0; j < chaine1.length; j++) {
      if (lettreDejaTrouve === false) {
        for (let k = 0; k < chaine2.length; k++) {
          if (chaine1[j] === chaine2[k] && lettreDejaTrouve === false) {
            for (let l = 0; l < chaine3.length; l++) {
              if (chaine1[j] === chaine3[l]) {
                priorite += lettreAlphabet.indexOf(chaine1[j]) + 1;
                lettreDejaTrouve = true;
                break;
              }
            }
          }
        }
      }
    }
  }
  return priorite;
}

console.log(premierePartie(data));


