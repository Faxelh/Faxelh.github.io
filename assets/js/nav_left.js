
const menuGauche = (headerCommute, headerId) =>{
  const commutateur = document.getElementById(headerCommute),
      headers = document.getElementById(headerId)
  if(headerCommute && headerId){
    commutateur.addEventListener('click', ()=>{
      headers.classList.toggle('right_show')
      commutateur.classList.toggle('bx-x')
    })
  }
}
menuGauche('menu_left','navbar_left')
/*==================== LINK ACTIVE ====================*/
const lienactiver = document.querySelectorAll('.nav_left__link')
function validerCouleur(){
  lienactiver.forEach(n => n.classList.remove('activation'))
  this.classList.add('activation')
}
lienactiver.forEach(n => n.addEventListener('click', validerCouleur))

