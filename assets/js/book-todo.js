
let BookmarkForm = document.getElementById("bookmarks_form"),
	 error_mark = document.getElementById("error_mark"),
	 mark,
	 del;
error_mark.style.padding = "7px";
BookmarkForm.addEventListener("submit", addItem);

function addItem(e) {
	e.preventDefault();
	let siteName = document.getElementById("siteName").value;
	let	 siteUrl = document.getElementById("siteUrl").value;
	let bookmark = {
		siteName: siteName,
		siteUrl: siteUrl
	};
	// Validation du nom du site
	if(siteName.length < 4){
		mark = "Saisissez un nom pour le Site min 4 caractères";
		error_mark.innerHTML = mark;
		error_mark.style.display= "block";
		setTimeout(() => {
			error_mark.style.display = "none";
		}, 3500);
		return false;
	}
	// Validation de l'url
	if(!isUrlValid(siteUrl)){
		mark = "Veuillez saisie une URL valide";
		error_mark.innerHTML = mark;
		error_mark.style.display= "block";
		setTimeout(() => {
			error_mark.style.display = "none";
		}, 3000);
		return false;
	}
	if(localStorage.getItem("bookmark") == null){
		localStorage.setItem("bookmark", "[]");
	}
	let bookmarks = JSON.parse(localStorage.getItem("bookmark"));
	bookmarks.push(bookmark);
	localStorage.setItem("bookmark", JSON.stringify(bookmarks));
	loadItems();
}
// charge les signets
function loadItems() {
	document.getElementById("bookmarks").innerHTML = "";
	if (localStorage.getItem("bookmark") != null) {
		let bookmarks = JSON.parse(localStorage.getItem("bookmark"));
		bookmarks.forEach((e) => {
			document.getElementById("bookmarks").innerHTML += `
                <div class="bookmark">
                    <h4>${e.siteName}</h4>
                    <a href="${e.siteUrl}" target="blank">Aller Sur le Site</a>
                    <span class="delete bx bx-trash-alt"></span>
                </div>
            `;
		});
	}
	// pour supprimer les signets
	del = document.getElementsByClassName("delete");
	for(let i=0; i<del.length; i++){
		del[i].addEventListener("click", delFunc);
	}
}
// validation d'url
function isUrlValid(userInput) {
	let res = userInput.match(
		 /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
	);
	return res != null;
}
// fonction de suppression du signet
function delFunc(){
	// obtenir les signets du stockage local et supprimer le signet du stockage local
	let bookmarks = JSON.parse(localStorage.getItem("bookmark"));
	console.log(Array.from(del).indexOf(this));
	bookmarks = bookmarks.filter(bookmark => bookmark !== bookmarks[Array.from(del).indexOf(this)]);
	localStorage.setItem("bookmark", JSON.stringify(bookmarks));
	this.parentNode.parentNode.removeChild(this.parentNode);
}
/*----===============================------*/
/* To-do list */
let TodoPush = document.getElementById('todo--push'),
	 TodoAll =document.querySelector('#todo--newtask #todo--input'),
	 error_enter = document.getElementById("error_enter"),
	 text;
error_enter.style.padding = "7px";
TodoPush.onclick = function(){
	if(TodoAll.value.length === 0){
		text = "Veuillez saisir une tâche";
		error_enter.innerHTML = text;
		error_enter.style.display= "block";
		setTimeout(() => {
			error_enter.style.display = "none";
		}, 1500);
		return false;
	}
	else{
		let todotask = document.querySelector('#todo--tasks'),
			  i;
		todotask.innerHTML += `
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
	TodoAll.value = "";
	}
}
