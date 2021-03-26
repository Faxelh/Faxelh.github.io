const cookieBox = document.querySelector(".cookies"),
    acceptBtn = cookieBox.querySelector("button"),
    time = document.querySelector('.time');
acceptBtn.onclick = ()=>{
// configuration du cookie pendant 1 mois, après un mois, il expirera automatiquement
  document.cookie = "CookieBy=Faxel; max-age="+60*60*24*30;
  if(document.cookie){  // si le cookie est défini
    cookieBox.classList.add("hide"); // masquer la boîte à cookies
  }else{  // si le cookie n'est pas défini, alerte une erreur
    alert("Le cookie ne peut pas être défini! Veuillez débloquer ce site du paramétrage des cookies de votre navigateur.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=Faxel");
// vérification de notre cookie
// si le cookie est défini, masquez la boîte à cookies sinon affichez-le
checkCookie !== -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

time.addEventListener('click', () => {
  cookieBox.style.display = 'none'
})