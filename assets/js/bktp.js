
const bktp = document.querySelector(".bktp");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    bktp.classList.add("show");
  } else {
    bktp.classList.remove("show");
  }
})

bktp.addEventListener('click', function(){
  window.scrollTo({
    top:0, left:0,
    behavior:"smooth"
  });
});