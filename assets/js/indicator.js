window.addEventListener('load', function () {
  const scrollLine = document.querySelector(".indicator");
  function fillScroll() {
    // Hauteur (en pixels) de la fenêtre du navigateur
    const windowHeight = window.innerHeight;
    // Hauteur de l'élément en pixels, y compris l'espace entre le contenu de l'élément et sa bordure
    const fullHeight = document.body.clientHeight;
    // Le nombre de pixels qui défilent actuellement verticalement dans le document
    const scrolled = window.scrollY;
    // Nombre de pixels numérisés
    const percentScrolled = (scrolled / (fullHeight - windowHeight) * 100);
    // Assignez cette valeur pour changer la hauteur de l'élément scrollLine
    scrollLine.style.width = `${percentScrolled}%`;
  }
  // événement de défilement de fenêtre
  window.addEventListener('scroll', debounced(fillScroll));
  // pour un défilement plus fluide
  function debounced(func, wait = 15, immediate) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args)
    }
  }
})