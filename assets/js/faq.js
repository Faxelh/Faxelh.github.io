
let FaqToggle = document.getElementsByClassName('faq--toggle'),
	 contentDiv = document.getElementsByClassName('faq--content'),
	 FaqIcons = document.getElementsByClassName('faq--icon');

for(let i=0; i<FaqToggle.length; i++){
	FaqToggle[i].addEventListener('click', ()=>{
		if( parseInt(contentDiv[i].style.height) !== contentDiv[i].scrollHeight){
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			FaqToggle[i].style.color = "var(--faq-toggle)";
			FaqIcons[i].style.color = "var(--faq-toggle)";
			FaqIcons[i].classList.remove('bx-plus-circle');
			FaqIcons[i].classList.add('bx-minus-circle');
		}
		else{
			contentDiv[i].style.height = "0px";
			FaqToggle[i].style.color = "var(--faq-color)";
			FaqIcons[i].style.color = "var(--faq-color)";
			FaqIcons[i].classList.remove('bx-minus-circle');
			FaqIcons[i].classList.add('bx-plus-circle');
		}
		for(let j=0; j<contentDiv.length; j++){
			if(j!==i){
				contentDiv[j].style.height = "0px";
				FaqToggle[j].style.color = "var(--faq-toggle-not)";
				FaqIcons[j].style.color = "var(--faq-toggle-not)";
				FaqIcons[j].classList.remove('bx-minus-circle');
				FaqIcons[j].classList.add('bx-plus-circle');
			}
			else{
				FaqToggle[j].style.color = "var(--faq-color)";
				FaqIcons[j].style.color = "var(--faq-color)";
			}
		}
	});
}