

let contents = document.querySelectorAll(".about-p"),
	 AboutBtn = document.querySelector(".about-read-more"),
	 noOfCharacater = 150;
contents.forEach(content => {
//Si la longueur du texte est inférieure à noOfCharacater... alors masquez le bouton Lire la suite
	if(content.textContent.length < noOfCharacater){
		content.nextElementSibling.style.display = "none";
	}
	else{
		let displayText = content.textContent.slice(0,noOfCharacater),
			 moreText = content.textContent.slice(noOfCharacater);
		content.innerHTML = `${displayText}<span class="about-dots">...</span><span class="about-hide about-more">${moreText}</span>`;
	}
});

AboutBtn.onclick = function (){
	let post = AboutBtn.parentElement;
	post.querySelector(".about-dots").classList.toggle("about-hide");
	post.querySelector(".about-more").classList.toggle("about-hide");
	this.textContent === "Read More" ? this.textContent = "Read Less" : this.textContent = "Read More";
}

/*
function readMore(btn){
	let post = btn.parentElement;
	post.querySelector(".about-dots").classList.toggle("about-hide");
	post.querySelector(".about-more").classList.toggle("about-hide");
	btn.textContent === "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}
// via le button vous appelez la fonction avec onclick="readMore(this)"
*/
