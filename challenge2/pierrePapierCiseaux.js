const A = {
  nom: "pierre",
  score: 1,
};

const X = {
  nom: "pierre",
  score: 1,
  final: "defaite",
};

const B = {
  nom: "papier",
  score: 2,
};

const Y = {
  nom: "papier",
  score: 2,
  final: "nul",
};

const C = {
  nom: "ciseaux",
  score: 3,
};

const Z = {
  nom: "ciseaux",
  score: 3,
  final: "victoire",
};

const victoire = 6;
const nul = 3;
const defaite = 0;

let data = [
  [B, Y],
  [A, Y],
  [B, Z],
  [A, Z],
  [A, Y],
  [B, Z],
  [C, X],
  [C, X],
  [C, X],
  [C, Y],
  [C, Z],
  [B, Y],
  [C, Y],
  [C, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [A, X],
  [A, Z],
  [C, Z],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, X],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [A, Y],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, Z],
  [A, Z],
  [C, Z],
  [B, Y],
  [A, X],
  [C, Z],
  [A, X],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, X],
  [C, Y],
  [B, Y],
  [A, Y],
  [A, Y],
  [B, Y],
  [A, Z],
  [B, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Z],
  [A, Z],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [A, X],
  [A, X],
  [A, X],
  [A, X],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, X],
  [B, Y],
  [C, X],
  [C, Z],
  [B, Z],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Z],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, X],
  [C, Y],
  [B, Z],
  [C, Z],
  [C, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [A, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, X],
  [C, Y],
  [C, X],
  [C, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [A, Z],
  [C, Z],
  [C, Z],
  [A, Z],
  [C, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, X],
  [B, X],
  [C, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, Z],
  [B, Y],
  [A, Z],
  [C, X],
  [C, X],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Z],
  [A, X],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Z],
  [C, Y],
  [B, Y],
  [A, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Z],
  [A, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [C, X],
  [B, Y],
  [A, Z],
  [A, X],
  [C, Y],
  [C, Y],
  [C, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, X],
  [A, Z],
  [B, Y],
  [B, Z],
  [A, X],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, X],
  [C, Z],
  [C, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [C, X],
  [C, Z],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Z],
  [C, Y],
  [C, X],
  [C, Z],
  [B, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [A, X],
  [A, Y],
  [B, Y],
  [A, Y],
  [C, Y],
  [C, X],
  [C, X],
  [B, Z],
  [B, Y],
  [C, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [A, Z],
  [C, Z],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Z],
  [A, X],
  [A, Z],
  [C, Z],
  [B, Y],
  [A, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, X],
  [B, Y],
  [C, Y],
  [C, Y],
  [C, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [B, Y],
  [A, Y],
  [C, Y],
  [B, Z],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Z],
  [C, Z],
  [C, Z],
  [A, X],
  [A, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [B, Z],
  [A, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [C, Z],
  [C, Z],
  [C, Z],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [C, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [A, Z],
  [C, Y],
  [C, X],
  [C, X],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [A, Z],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, X],
  [B, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [A, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [C, Z],
  [C, Y],
  [A, Z],
  [A, Y],
  [A, Y],
  [A, X],
  [A, Y],
  [B, Y],
  [B, Z],
  [A, X],
  [C, X],
  [C, Z],
  [B, Y],
  [A, Z],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [A, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [C, X],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, X],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, X],
  [A, Z],
  [B, Z],
  [A, X],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, X],
  [A, X],
  [C, Y],
  [C, X],
  [A, Y],
  [B, Z],
  [B, Y],
  [A, X],
  [A, Z],
  [C, X],
  [C, Z],
  [B, Z],
  [C, X],
  [C, X],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, X],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [B, X],
  [B, Y],
  [C, X],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, X],
  [C, X],
  [B, Z],
  [B, Z],
  [B, Z],
  [B, X],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Z],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [B, Y],
  [A, Y],
  [A, Y],
  [C, Y],
  [B, Z],
  [B, Z],
  [C, X],
  [B, Y],
  [C, X],
  [B, Z],
  [C, Z],
  [A, Z],
  [A, Y],
  [B, Z],
  [C, X],
  [B, Y],
  [A, X],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, X],
  [B, Z],
  [A, Z],
  [B, Z],
  [A, X],
  [A, X],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, X],
  [B, Y],
  [C, Y],
  [B, Z],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Z],
  [A, X],
  [A, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, X],
  [C, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, X],
  [A, Z],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [C, X],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, X],
  [A, Y],
  [A, Z],
  [C, X],
  [C, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [A, Y],
  [B, Z],
  [A, X],
  [C, Z],
  [A, X],
  [B, Z],
  [A, Z],
  [A, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [A, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [A, X],
  [B, Y],
  [A, X],
  [A, X],
  [A, Z],
  [C, Y],
  [A, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [C, Z],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Y],
  [C, Z],
  [A, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [A, Z],
  [A, X],
  [B, Y],
  [B, Z],
  [A, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, Y],
  [A, Z],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [C, Z],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, X],
  [C, Y],
  [C, Y],
  [A, Z],
  [A, X],
  [B, Y],
  [A, X],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, X],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Z],
  [A, X],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, X],
  [A, X],
  [B, X],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Z],
  [A, Y],
  [A, Y],
  [C, Z],
  [B, Y],
  [C, Z],
  [C, X],
  [A, Y],
  [B, Y],
  [A, Y],
  [A, X],
  [B, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, X],
  [C, X],
  [A, X],
  [B, Z],
  [C, Y],
  [A, X],
  [C, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Z],
  [A, Z],
  [B, Z],
  [B, Z],
  [C, Z],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, Z],
  [A, Y],
  [B, Z],
  [C, Z],
  [C, Y],
  [C, X],
  [C, Z],
  [C, X],
  [B, Y],
  [A, X],
  [B, Z],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, X],
  [B, Y],
  [A, X],
  [B, Z],
  [A, Z],
  [A, Z],
  [B, Y],
  [C, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Z],
  [C, Y],
  [A, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [A, X],
  [B, Z],
  [C, X],
  [B, Z],
  [B, Y],
  [A, Y],
  [A, Y],
  [C, Y],
  [A, Z],
  [B, X],
  [A, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [C, X],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, X],
  [A, Z],
  [B, Z],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [A, Y],
  [A, Y],
  [C, Y],
  [A, Z],
  [C, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Z],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Y],
  [A, X],
  [C, X],
  [A, Y],
  [C, Y],
  [C, X],
  [B, Y],
  [C, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, Y],
  [A, X],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, X],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, X],
  [A, X],
  [A, X],
  [C, X],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [C, Y],
  [A, X],
  [A, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [C, Y],
  [A, Z],
  [A, Y],
  [A, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [B, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [C, Y],
  [C, Y],
  [A, X],
  [B, Y],
  [A, X],
  [C, X],
  [A, Z],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, X],
  [B, Z],
  [A, X],
  [C, Y],
  [C, Z],
  [A, X],
  [B, Z],
  [C, X],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, X],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [A, Z],
  [A, Z],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, X],
  [A, X],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, X],
  [A, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [A, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Y],
  [A, X],
  [C, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [A, Y],
  [C, X],
  [B, Y],
  [C, Z],
  [A, X],
  [B, X],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, X],
  [B, Z],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [C, Y],
  [A, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [A, Z],
  [A, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [C, Y],
  [C, Y],
  [C, Y],
  [C, Z],
  [B, Y],
  [C, Y],
  [C, X],
  [A, Z],
  [B, Z],
  [B, X],
  [B, X],
  [C, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, X],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, Z],
  [A, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [C, Y],
  [A, Z],
  [C, Y],
  [C, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [A, X],
  [A, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Y],
  [A, X],
  [B, X],
  [C, X],
  [C, Z],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [C, Y],
  [C, Z],
  [B, Y],
  [A, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [C, Z],
  [C, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [A, Z],
  [B, Y],
  [C, Y],
  [C, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [C, Y],
  [C, X],
  [A, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [C, Y],
  [A, Y],
  [A, X],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [C, Z],
  [B, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, X],
  [A, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [C, X],
  [A, Y],
  [B, Y],
  [B, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [C, Y],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [A, X],
  [C, Y],
  [C, Z],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [A, Z],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, X],
  [A, X],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [A, Y],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [C, X],
  [B, Y],
  [A, X],
  [C, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [C, X],
  [A, Y],
  [B, Y],
  [A, Z],
  [A, X],
  [B, Z],
  [C, Y],
  [C, Y],
  [A, Z],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, X],
  [B, X],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Z],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, Y],
  [C, Z],
  [C, X],
  [C, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, X],
  [C, Y],
  [A, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [C, Y],
  [C, X],
  [C, Y],
  [C, X],
  [B, Y],
  [A, Y],
  [A, Y],
  [B, Y],
  [C, X],
  [C, X],
  [C, X],
  [C, X],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Z],
  [C, Y],
  [B, Y],
  [A, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [C, X],
  [C, Y],
  [C, Y],
  [A, X],
  [C, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [A, Z],
  [A, X],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, Z],
  [A, Z],
  [C, Z],
  [B, Y],
  [C, Y],
  [B, Z],
  [C, Z],
  [C, Y],
  [A, X],
  [A, Y],
  [B, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Z],
  [C, Y],
  [A, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, X],
  [B, Y],
  [B, X],
  [B, Z],
  [A, X],
  [C, X],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, X],
  [A, Y],
  [B, Y],
  [B, Z],
  [C, Z],
  [B, Y],
  [B, Z],
  [A, Y],
  [A, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [C, Z],
  [A, Z],
  [B, Y],
  [B, X],
  [A, Y],
  [C, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, X],
  [C, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [C, Z],
  [C, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Z],
  [C, Z],
  [B, Z],
  [A, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, X],
  [B, Z],
  [B, Y],
  [C, Y],
  [A, X],
  [B, Y],
  [A, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [A, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [A, Z],
  [C, Y],
  [C, Z],
  [C, Z],
  [A, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [C, X],
  [A, X],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Z],
  [A, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, Y],
  [A, X],
  [C, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Z],
  [C, Z],
  [A, Z],
  [A, Y],
  [C, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [A, X],
  [A, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Z],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [C, Z],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [C, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Y],
  [C, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [A, Z],
  [A, X],
  [B, Z],
  [B, Y],
  [B, Z],
  [A, Z],
  [C, Y],
  [A, Y],
  [A, X],
  [C, Y],
  [A, Y],
  [A, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [A, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Z],
  [A, Y],
  [A, X],
  [A, Z],
  [C, Z],
  [B, Z],
  [C, X],
  [B, Y],
  [A, X],
  [B, Z],
  [A, Z],
  [B, Y],
  [A, Z],
  [B, Y],
  [A, Z],
  [C, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [A, X],
  [B, Y],
  [A, Z],
  [C, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [C, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [C, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Y],
  [C, Z],
  [B, Y],
  [A, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [A, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [C, Y],
  [C, X],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, X],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, Z],
  [C, Y],
  [C, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, X],
  [B, Z],
  [A, X],
  [C, Z],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Z],
  [C, Z],
  [C, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Z],
  [C, Y],
  [C, Y],
  [A, Y],
  [B, Z],
  [C, X],
  [C, Y],
  [C, X],
  [A, Z],
  [A, X],
  [B, Y],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [B, Z],
  [B, X],
  [B, Y],
  [B, Z],
  [B, Y],
  [B, X],
  [A, Y],
  [B, Y],
  [C, X],
  [A, Z],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, X],
  [C, Z],
  [B, Z],
  [B, Z],
  [B, Z],
  [A, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [B, Y],
  [A, Y],
  [A, Z],
  [B, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [C, Y],
  [C, X],
  [B, Y],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [C, X],
  [C, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Y],
  [A, X],
  [B, X],
  [A, Y],
  [C, Y],
  [B, Y],
  [B, X],
  [A, X],
  [B, Y],
  [B, Z],
  [A, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, X],
  [A, Y],
  [A, Y],
  [A, X],
  [B, Z],
  [A, X],
  [C, Y],
  [C, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [C, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [B, Y],
  [B, Z],
  [B, Z],
  [A, X],
  [C, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, X],
  [C, Y],
  [C, Z],
  [A, Z],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Y],
  [C, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Z],
  [A, Z],
  [A, X],
  [C, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [C, Y],
  [A, Y],
  [B, Y],
  [A, Y],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, Z],
  [B, Y],
  [A, Y],
  [B, Y],
  [C, Z],
  [C, Z],
  [A, X],
  [A, X],
  [C, Z],
  [A, X],
  [A, Z],
  [B, Y],
  [B, Y],
  [C, Z],
  [C, Y],
  [C, Z],
  [A, X],
  [A, X],
  [B, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [B, Y],
  [B, Z],
  [C, Y],
  [C, X],
  [B, Y],
  [C, Z],
  [B, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [C, Y],
  [A, Z],
  [B, Y],
  [B, Y],
  [A, X],
  [A, Z],
  [A, X],
  [C, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [B, Z],
  [C, X],
  [B, Y],
  [C, Y],
  [C, Y],
  [A, Z],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, Z],
  [A, Y],
  [A, Y],
  [A, X],
  [B, Z],
  [C, Z],
  [C, X],
  [B, Y],
  [A, X],
  [C, X],
  [A, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [A, Z],
  [B, Y],
  [C, X],
  [B, Y],
  [A, Z],
  [B, Z],
  [B, Z],
  [C, Y],
  [B, Y],
  [C, X],
  [C, X],
  [C, Y],
  [C, Y],
  [C, Z],
  [C, X],
  [B, Y],
  [C, Y],
  [C, Y],
  [B, Z],
  [B, Y],
  [A, Y],
  [B, Z],
  [A, X],
  [B, Y],
  [A, Z],
  [C, Y],
  [B, Y],
  [C, Z],
  [B, Y],
  [A, X],
  [C, Z],
  [B, Z],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [B, Y],
  [C, Z],
  [A, Z],
  [C, Y],
  [A, Z],
  [B, Y],
  [C, X],
  [C, X],
  [A, X],
  [A, Y],
  [B, Z],
  [C, Y],
  [C, X],
  [C, X],
  [C, Y],
  [C, X],
  [B, Y],
  [C, X],
  [A, Y],
  [C, Z],
  [B, Y],
  [B, Z],
  [B, Y],
  [A, X],
  [B, Y],
  [A, Z],
  [A, Y],
  [C, X],
  [A, X],
  [B, X],
  [C, X],
  [C, Z],
  [C, X],
  [A, Y],
  [A, Z],
  [B, Y],
  [A, Y],
];
let monScore = 0;
function premierePartie(data) {
  let score = 0;
  for (let i = 0; i < data.length; i++) {
    //   console.log("CHECKKKKKK"+ i, data[0][0].nom);
    let adversaireForme = data[i][0];
    let maForme = data[i][1];
    // console.log("CHECKKKKKK", data);
    if (adversaireForme.nom === maForme.nom) {
      score += nul + maForme.score;
    } else {
      if (adversaireForme.nom === "pierre") {
        if (maForme.nom === "papier") {
          score += victoire + maForme.score;
        } else if (maForme.nom === "ciseaux") {
          score += defaite + maForme.score;
        }
      } else if (adversaireForme.nom === "papier") {
        if (maForme.nom === "ciseaux") {
          score += victoire + maForme.score;
        } else if (maForme.nom === "pierre") {
          score += defaite + maForme.score;
        }
      } else if (adversaireForme.nom === "ciseaux") {
        if (maForme.nom === "pierre") {
          score += victoire + maForme.score;
        } else if (maForme.nom === "papier") {
          score += defaite + maForme.score;
        }
      }
    }
  }
  return score;
  //   return JSON.stringify(data);
}

function secondePartie(data) {
  let score = 0;
  for (let i = 0; i < data.length; i++) {
    let adversaireForme = data[i][0];
    let maForme = data[i][1];

    if (maForme.final === "defaite") {
      if (adversaireForme.nom === "pierre") {
        maForme = Z;
        score += premierePartie([[adversaireForme, maForme]]);
      } else if (adversaireForme.nom === "papier") {
        maForme = X;
        score += premierePartie([[adversaireForme, maForme]]);
      } else if (adversaireForme.nom === "ciseaux") {
        // Y.nom = "papier"
        maForme = Y;
        score += premierePartie([[adversaireForme, maForme]]);
      }
    } else if (maForme.final === "victoire") {
      if (adversaireForme.nom === "pierre") {
        // Y.nom = "papier"
        maForme = Y;
        score += premierePartie([[adversaireForme, maForme]]);
      } else if (adversaireForme.nom === "papier") {
        // Z.nom = "ciseaux"
        maForme = Z;
        score += premierePartie([[adversaireForme, maForme]]);
      } else if (adversaireForme.nom === "ciseaux") {
        // X.nom = "pierre"
        maForme = X;
        score += premierePartie([[adversaireForme, maForme]]);
      }
    } else if (maForme.final === "nul") {
      maForme = adversaireForme;
      score += premierePartie([[adversaireForme, maForme]]);
      //   console.log('TESTTTTTTTT', [adversaireForme, maForme])
    }
  }
  return score;
}
// monScore = premierePartie(data);
// console.log("MON SCORE", monScore);

let secondScore = secondePartie(data);
console.log("MON SECOND SCORE", secondScore);
