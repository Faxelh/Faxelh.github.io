
const themeButton = document.getElementById('sombres')
const darkTheme = 'sombre'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const projects = [
  {
    auteur:'Faxel',
    demo:
        'https://www.youtube.com/watch?v=9HVKR_hK0nY&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=10&t=0s'
  },
  {
    auteur:'Faxel',
    demo:
        'https://www.youtube.com/watch?v=NBkD-O7f4Bs&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  },
  {
    auteur:'Faxel',
    demo:
        'https://www.youtube.com/watch?v=71HM728Mul4&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  },
  {
    
    auteur:'Faxel',
    demo:
        'https://www.youtube.com/watch?v=aZeKU7xoT0w&list=PLgBH1CvjOA63Xvt0BaeQ7zL4KXX96Wbgp&index=11&t=0s'
  }
];

const list = document.getElementById('list');
projects.forEach(({  demo }, i) => {
  const listItem = document.createElement('li');
  
  listItem.innerHTML = `
		<a href="/${auteur}/index.html">
			<img src="/${auteur}/design/desktop-design.jpg" alt="${auteur}" />
			<p>${i + 1}. ${formatProjectName(auteur)}</p>
		</a>

		<div class="links-container">
			<a href="/${auteur}/index.html" class="blue">
				<i class="bx bxs-show"></i>
			</a>
			<a href="${demo}" class="youtube">
				<i class="bx bxl-youtube"></i>
			</a>
		</div>
	`;
  
  list.appendChild(listItem);
});

function formatProjectName(auteur) {
  return auteur
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
}
