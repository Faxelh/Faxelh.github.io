
/* Mode Sombre */
const themeId = document.getElementById('theme'),
 themeSombre = 'sombre',
iconTheme  =  'bx-sun';
// Thème précédemment sélectionné (si l'utilisateur est sélectionné)
const choixTheme = localStorage.getItem('selected-theme')
const choixIcon = localStorage.getItem('selected-icon')
// On obtient le thème actuel de l'interface en validant la classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(themeSombre) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'
// On valide si l'utilisateur a précédemment choisi un sujet
if (choixTheme) {
// Si la validation est effectuée, nous demandons quel était le problème pour savoir si nous avons activé ou désactivé l'obscurité
  document.body.classList[choixTheme === 'dark' ? 'add' : 'remove'](themeSombre)
  themeId.classList[choixIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
// Activer / désactiver le thème manuellement avec le bouton
themeId.addEventListener('click', () => {
// Ajout ou suppression du thème sombre / icône
  document.body.classList.toggle(themeSombre)
  themeId.classList.toggle(iconTheme)
// Nous sauvegardons le thème et l'icône actuelle que l'utilisateur a choisi
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})