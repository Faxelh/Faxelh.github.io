const curseur = document.getElementById('curseur');
document.addEventListener('mousemove', e => {
  curseur.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
  curseur.classList.add("expand");
  setTimeout(() => {
    curseur.classList.remove("expand");
  }, 200)
})