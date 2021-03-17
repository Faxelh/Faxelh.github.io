const resultat = document.getElementById('result');
const longueur = document.getElementById('long');
const majus = document.getElementById('majuscules');
const minus = document.getElementById('miniscules');
const nombre = document.getElementById('nombres');
const symb = document.getElementById('symboles');
const gens = document.getElementById('generer');
const copier = document.getElementById('presse');
// Création d'une constante aleatoire
const hasard = {
   moins: HasardMinus,
   plus: HasardMajus,
   nums: HasardNombre,
   symbol: HasardSymb
}
// Js de la copie dans le presse-papiers
copier.addEventListener('click', () => {
   const texte = document.createElement('textarea');
   const mdp = resultat.innerText;
   if(!mdp) { return; }
   texte.value = mdp;
   document.body.appendChild(texte);
   texte.select();
   document.execCommand('copy');
   texte.remove();
   alert('Mot de passe copié dans le presse-papiers');
});
// Activation du bouton generateur
generer.addEventListener('click', () => {
   const poids = +longueur.value;
   const minuscule = minus.checked;
   const majuscule = majus.checked;
   const numero = nombre.checked;
   const symbs = symb.checked;
   resultat.innerText = genrateurMdp(minuscule, majuscule, numero, symbs, poids);
});
// Fonction du bouton generateur et verfication
function genrateurMdp(moins, plus, nums, symbol, longue) {
   let generateur= '';
   const Compte = moins + plus + nums + symbol;
   const tableau = [{moins}, {plus}, {nums}, {symbol}].filter(item => Object.values(item)[0]);
   // Si aucune case n'a été selectionée
   if(Compte === 0) {
      return '';
   }
   // créer une boucle
   for(let i=0; i<longue; i+=Compte) {
      tableau.forEach(type => {
         const nomFonc = Object.keys(type)[0];
         generateur += hasard[nomFonc]();
      });
   }
   return generateur.slice(0, longue);
}
// Fonctions aléatoires predefinis
function HasardMinus() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function HasardMajus() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function HasardNombre() {
   return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function HasardSymb() {
   const pattern = "'!@#$%^&*(){}[]=<>/,.|"
   return pattern[Math.floor(Math.random() * pattern.length)];
}
