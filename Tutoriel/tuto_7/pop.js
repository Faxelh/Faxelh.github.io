
const popup = document.querySelector('.pop'),
    fermer = document.querySelector('.x');
window.onload = function (){
  setTimeout(function (){
    popup.style.display="block";
   } , 2000)
}
fermer.addEventListener('click', () => {
  popup.style.display="none";
})