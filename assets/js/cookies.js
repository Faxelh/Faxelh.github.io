
const trickBtn = document.getElementById('accepter');
const btnContainer = document.querySelector('.bouton');
btnContainer.style.flexDirection = 'row';
trickBtn.addEventListener('mouseover', (e) => {
  const currentDir = btnContainer.style.flexDirection;
  if(currentDir === 'row') {
    btnContainer.style.flexDirection = 'row-reverse';
  } else {
    btnContainer.style.flexDirection = 'row';
  }
})
const cookieBox = document.querySelector(".pop"),
    acceptBtn = cookieBox.querySelector(".btn"),
    close = document.querySelector('.xs');

acceptBtn.onclick = ()=>{
  document.cookie = "CookieBy=Faxel; max-age="+60*60*24*30;
  if(document.cookie){
    cookieBox.classList.add("cacher");
  }else{
    alert("Le cookie ne peut pas être défini! Veuillez débloquer ce site du paramétrage des cookies de votre navigateur.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=Faxel");
checkCookie !== -1 ? cookieBox.classList.add("cacher") : cookieBox.classList.remove("cacher");
close.addEventListener('click', () => {
  cookieBox.style.display = 'none'
})
