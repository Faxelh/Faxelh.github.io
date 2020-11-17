<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>
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
