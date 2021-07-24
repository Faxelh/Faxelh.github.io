
//document.getElementsByClassName("bookmarks_loader")[0].style.display = "none";

let form = document.getElementById("bookmarks_form");
form.addEventListener("submit", addItem);
let del;

// ajouter un nouveau signet
function addItem(e) {
	e.preventDefault();
	let siteName = document.getElementById("siteName").value;
	let siteUrl = document.getElementById("siteUrl").value;
	let bookmark = {
		siteName: siteName,
		siteUrl: siteUrl
	};
	if(!isUrlValid(siteUrl)){
		alert("Veuillez saisie une URL valide");
		return;
	}
	// Validation du nom du site
	if(siteName.length < 4){
		alert("Veuillez saisie un nom pour le Site min 4 caractères.");
		return;
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