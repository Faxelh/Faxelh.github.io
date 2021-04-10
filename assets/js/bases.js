
window.addEventListener("scroll", function(){
  const hd = document.querySelector("header");
  hd.classList.toggle('sticky', window.scrollY > 0);
});
const afficherMenu = (basculeId, navId) =>{
  const bascule = document.getElementById(basculeId),
      nav = document.getElementById(navId)
  if(bascule && nav){
    bascule.addEventListener('click', ()=>{
      nav.classList.toggle('afficher')
    })
  }
}
afficherMenu('burgs','affiche_menu')

const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  const navMenu = document.getElementById('affiche_menu')
  navMenu.classList.remove('afficher')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*---------------------------------------------------------------------*/
const bug = document.querySelectorAll('.burgs');
function rotateI(){
  this.classList.add('affiche');
}
bug.forEach(n => n.addEventListener('click', rotateI));

/*---------------------------------------------------------------------*/
const menu_sign = document.querySelector(".sign_menu"),
    actionBtn = document.querySelector("#nvb__btn");
actionBtn.addEventListener("click", () => {
  menu_sign.classList.toggle("open")
})
/*---------------------------------------------------------------------*/
const body = document.querySelector(".loader");
setTimeout(function (){
  body.classList.add("back");
}, 5000);
/*---------------------------------------------------------------------*/
window.addEventListener('load', function () {
  let intro = document.querySelector('.loader')
  setTimeout(() => {
    intro.classList.remove('transi');
  }, 100);
})
/*---------------------------------------------------------------------*/
//javascript
const navigation = document.getElementById("#nvb__btn");
const navigationItems = document.querySelectorAll(" .sign_menu a ")

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    navigation.classList.remove("affiche");
  });
});