const saisir = document.querySelectorAll(".input_field");
function Fonctionfocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function Fonctionblur() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}
saisir.forEach((input) => {
  input.addEventListener("focus", Fonctionfocus);
  input.addEventListener("blur", Fonctionblur);
});

window.onload = function(){
  setTimeout(function(){
    const chargement = document.getElementsByClassName("content")[0];
    chargement.style.display = "none";
  },5000)
}
function  valides(){
  const  formBox = document.getElementById('forms');
  const  mailsBx = document.getElementById('email').value;
  const  check =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  if(mailsBx.match(check)){
    formBox.classList.add('valide')
    formBox.classList.remove('invalide')
  }
  else{
    formBox.classList.add('invalide')
    formBox.classList.remove('valide')
  }
  if(mailsBx === ""){
    formBox.classList.remove('invalide')
    formBox.classList.remove('valide')
  }
}
