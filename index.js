const contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantChoixUser = document.getElementById("choix-user");
const contenantResultat = document.getElementById("resultat");
const choixPossibles = document.querySelectorAll("button");
let choixUser;
let choixOrdinateur;
let resultat;

//Evenement 'Click sur les buttons'
choixPossibles.forEach((choixPossible) =>
  choixPossible.addEventListener("click", (e) => {
    //récuperer id du button cliquer
    choixUser = e.target.id;
    //ajouter l'image qui correspond au choix
    contenantChoixUser.innerHTML = `
    <img src="${choixUser}.png">
    `;
    generer_choix_ordinateur();
    verification();
  })
);

//fonction pour generer le choix de l'ordinateur
function generer_choix_ordinateur() {
  random = Math.floor(Math.random() * 3) + 1; //generer des nombre compris entre 1 et 3
  if (random === 1) {
    //si ramdom = à 1 :
    choixOrdinateur = "pierre";
  }
  if (random === 2) {
    //si ramdom = à 1 :
    choixOrdinateur = "papier";
  }
  if (random === 3) {
    //si ramdom = à 1 :
    choixOrdinateur = "ciseaux";
  }
  //on ajoute l'image qui correspond au choix
  contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

//fonction pour vérifier si le jouer a gagné ou pas
function verification() {
  //les cas ou le jouer perd
  if (choixUser == choixOrdinateur) {
    resultat = "Egalité";
  }
  if (choixUser == "pierre" && choixOrdinateur == "papier") {
    resultat = "Perdu !";
  }
  if (choixUser == "papier" && choixOrdinateur == "ciseaux") {
    resultat = "Perdu !";
  }
  if (choixUser == "ciseaux" && choixOrdinateur == "pierre") {
    resultat = "Perdu !";
  }

  //les cas ou le jouer gagne
  if (choixUser == "pierre" && choixOrdinateur == "ciseaux") {
    resultat = "Gagné !";
  }
  if (choixUser == "ciseaux" && choixOrdinateur == "papier") {
    resultat = "Gagné !";
  }
  if (choixUser == "papier" && choixOrdinateur == "pierre") {
    resultat = "Gagné !";
  }
  contenantResultat.innerHTML = resultat;
}
