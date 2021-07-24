
function validation(){
	let name = document.getElementById("name").value,
		 email = document.getElementById("email").value,
		 phone = document.getElementById("phone").value,
		 subject = document.getElementById("subject").value,
		 message = document.getElementById("message").value,
		 error_msg = document.getElementById("error_msg");
	
	error_msg.style.padding = "10px";
	
	let text;
	if(name.length < 5){
		text = "Veuillez entrer un nom valide";
		error_msg.innerHTML = text;
		return false;
	}
	if(email.indexOf("@") === -1 || email.length < 6){
		text = "Veuillez entrer un e-mail valide";
		error_msg.innerHTML = text;
		return false;
	}
	if(isNaN(phone) || phone.length !== 10){
		text = "Veuillez entrez un numéro de téléphone valide";
		error_msg.innerHTML = text;
		return false;
	}
	if(subject.length < 10){
		text = "Veuillez saisir rempli la case Subject";
		error_msg.innerHTML = text;
		return false;
	}
	if(message.length <= 110){
		text = "Veuillez saisir plus de 110 caractères";
		error_msg.innerHTML = text;
		return false;
	}
	alert("Formulaire soumis avec succès!");
	return true;
}