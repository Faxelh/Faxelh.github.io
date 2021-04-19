const navs = document.querySelector("nav");
window.addEventListener("scroll", function() {
  navs.classList.toggle("sticky", window.scrollY > 0);
})


const burger = document.querySelector( '.hburger');
const mobile_menu = document.querySelector('.navis .nav_bar .nav_list .nav_cont');
const menu_item = document.querySelectorAll('.navis .nav_bar .nav_list .nav_cont .nav_item  .nav_link');
const header = document.querySelector('#nvbars .navis ');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

/*---------------------------------------------------------------------*/
const body = document.querySelector(".loader");
setTimeout(function (){
  body.classList.add("back");
}, 5000);
/*---------------------------------------------------------------------*/
window.addEventListener('load', function () {
  let intro = document.querySelector('.loader')
  setTimeout(() => {
    intro.classList.remove('transi');
  }, 100);
})

const audroit = document.querySelector(".audroit");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight < 500) {
    audroit.classList.add("apparait");
  } else {
    audroit.classList.remove("apparait");
  }
});

audroit.addEventListener('click', function(){
  window.scroll({
    behavior:"smooth"
  });
});

/*Js de la case de RECHERCHE */
const opens = document.querySelector(".opened");
const closed = document.querySelector(".closed");
const forms = document.querySelector("form");
closed.onclick = ()=>{
  opens.classList.remove("hiden");
  closed.classList.remove("view");
  forms.classList.remove("showed");
  closed.style.color = "#f00";
}
opens.onclick = ()=>{
  forms.classList.add("showed");
  opens.classList.add("hiden");
  closed.classList.add("view");
}