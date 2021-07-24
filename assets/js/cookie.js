
let trickBtn = document.getElementById('allow_cookie'),
	 btnContainer = document.querySelector('.cookie_bouton'),
	 cookieBox = document.querySelector(".cookie_pop"),
	 allowBtn = cookieBox.querySelector(".cookie_btn"),
	 close = document.querySelector('.cookie_close .closer_cookie');


btnContainer.style.flexDirection = 'row';
trickBtn.addEventListener('mouseover', (e) => {
	let currentDir = btnContainer.style.flexDirection;
	if(currentDir === 'row') {
		btnContainer.style.flexDirection = 'row-reverse';
	} else {
		btnContainer.style.flexDirection = 'row';
	}
})

allowBtn.onclick = ()=>{
	document.cookie = "CookieBy=Faxel; max-age="+60*60*24*30;
	if(document.cookie){
		cookieBox.classList.add("cookie_hide");
	}else{
		alert("Les cookies ne peut pas être défini! Veuillez débloquer ce site du paramétrage des cookies via votre navigateur.");
	}
}
let checkCookie = document.cookie.indexOf("CookieBy=Faxel");
checkCookie !== -1 ? cookieBox.classList.add("cookie_hide") : cookieBox.classList.remove("cookie_hide");
close.addEventListener('click', () => {
	cookieBox.style.display = 'none'
})
