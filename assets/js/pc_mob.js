const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nvb__menu');
const navLogo = document.querySelector('#nvb__lg');
// Afficher le menu mobile
const mobileMenu = () => {
   menu.classList.toggle('is-active');
   menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
// Afficher le menu actif lors du défilement
const highlightMenu = () => {
   const elem = document.querySelector('.mise_evidence');
   const homeMenu = document.querySelector('#home-page');
   const tutoMenu = document.querySelector('#tuto-page');
   const servicesMenu = document.querySelector('#services-page');
   const conditionMenu = document.querySelector('#condition-page');
   const FaxelMenu = document.querySelector('#portfolio');
   let scrollPos = window.scrollY;
   // ajoute la classe 'highlight' à mes éléments de menu
   if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      tutoMenu.classList.remove('highlight');
      return;
   } else if (window.innerWidth > 960 && scrollPos < 1400) {
      tutoMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      conditionMenu.classList.remove('highlight');
      FaxelMenu.classList.remove('highlight');
      return;
   } else if (window.innerWidth > 960 && scrollPos < 2345) {
      servicesMenu.classList.add('highlight');
      tutoMenu.classList.remove('highlight');
      conditionMenu.classList.remove('highlight');
      FaxelMenu.classList.remove('highlight');
      return;
   }
   if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
   }
};
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
// Fermer le menu mobile en cliquant sur un élément de menu
const hideMobileMenu = () => {
   const menuBars = document.querySelector('.is-active');
   if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
   }
};
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);