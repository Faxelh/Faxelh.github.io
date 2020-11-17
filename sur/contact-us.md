<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
* {
	box-sizing: border-box;
}
body {
	background: #302f2f;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;
}
h1 {
	font-weight: bold;
	margin: 0;
}
h2 {
	text-align: center;
	color: #fffde7;
}
p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}
span {
	font-size: 12px;
	color: #fff;
}
a {
	color: #ed1212;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
	font-weight: 600;
}
button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: 700;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}
button:active {
	transform: scale(0.95);
}
button:focus {
	outline: none;
}
button.ghost {
	background-color: #000;
	border: 2px solid #0b0a0a;
	font-size: 18px;
}
button.ghost:hover {
	background-color: #42f103;
	color: #000;
}
button.ghosts {
	background-color: #42f103;
	border: 2px solid #0b0a0a;
	font-size: 13px;
	color: #000;
}
button.ghosts:hover {
	background-color: #000;
	color: #fff;
}
form {
	background-color: #333A45;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}
input {
	background-color: #c9c7c7;
	border: none;
	border-radius: 50px;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}
.container {
	background-color: #fff;
	border-radius: 20px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			    0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}
.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}
.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}
.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}
.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}
.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}
@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}
.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}
.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}
.overlay {
	background: #fb0039;
	background: -webkit-linear-gradient(to right, #FF4B2B, #ee335e);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #0c0707;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}
.container.right-panel-active .overlay {
  	transform: translateX(50%);
}
.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}
.overlay-left {
	transform: translateX(-20%);
}
.container.right-panel-active .overlay-left {
	transform: translateX(0);
}
.overlay-right {
	right: 0;
	transform: translateX(0);
}
.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}
.social-container {
	margin: 20px 0;
	background-color: #333A45;
}
.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
	font-size: 25px;
	background-color: #292828;
}

.social-container a:nth-child(1) {
	color: #4267B2;
}
.social-container a:nth-child(2) {
	color: #f10505;
}
.social-container a:nth-child(3) {
	color: #05d3f7;
}

.social-container a:hover:nth-child(1) {
	background-color: #131212;
}
.social-container a:hover:nth-child(2) {
	background-color: #131212;
}
.social-container a:hover:nth-child(3) {
	background-color: #131212;
}

footer {
    background-color: #080505;
    color: #fff;
    font-size: 25px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}
footer p {
    margin: 10px 0;
}
footer i {
    color: crimson;
}
footer a {
    color: #3c97bf;
    text-decoration: none;
	font-weight: 900;
}
footer a:hover {
	color: #ff410f;
}
</style>
<body>
<h2>Connectez-vous/Inscrivez-vous pour recevoir les dernieres postes</h2>
<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Créé un compte</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-twitter"></i></a>
			</div>
			<span>ou utilisez votre email pour vous inscrire</span>
			<input type="text" placeholder="Nom" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Mot de passe" />
			<button>S'inscrire</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>se connecter</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-twitter"></i></a>
			</div>
			<span>ou utilisez votre compte</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Mot de passe" />
			<a href="#">Mot de passe oublié?</a>
			<button>Se connecter</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Nous saluons votre retour!</h1>
				<p>Pour rester connecté avec nous, veuillez vous connecter avec vos informations personnelles</p>
				<button class="ghosts" id="signIn">Se connecter</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Salut l'ami, vous nous avez manquez!</h1>
				<p>Entrez vos informations personnelles et commencez votre voyage avec nous</p>
				<button class="ghost" id="signUp">S'inscrire</button>
			</div>
		</div>
	</div>
</div>

<footer>
	<p>
		Designed with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://t.me/threatz3r0">Threat Z3R0</a>
	</p>
</footer>

<script>
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
  });
</script>

</body>
</html>
