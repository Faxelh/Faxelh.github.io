
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


/* To-do list */

document.querySelector('#todo--push').onclick = function(){
	if(document.querySelector('#todo--newtask #todo--input').value.length === 0){
		alert("Veuillez saisir une tâche")
	}
	else{
		let i;
		document.querySelector('#todo--tasks').innerHTML += `
         <div class="todo--task">
             <span id="todo--taskname">
                 ${document.querySelector('#todo--newtask #todo--input').value}
             </span>
             <button class="todo--delete"><i class="bx bx-trash-alt"></i></button>
         </div>
        `;
		const current_tasks = document.querySelectorAll(".todo--delete");
		for(i = 0; i<current_tasks.length; i++){
			current_tasks[i].onclick = function(){
				this.parentNode.remove();
			}
		}
		const tasks = document.querySelectorAll(".todo--task");
		for(i = 0; i<tasks.length; i++){
			tasks[i].onclick = function(){
				this.classList.toggle('todo--completed');
			}
		}
		document.querySelector("#todo--newtask #todo--input").value = "";
	}
}