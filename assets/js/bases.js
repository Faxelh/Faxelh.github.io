
window.addEventListener("scroll", function(){
  const navSticky = document.querySelector("#navbars");
  navSticky.classList.toggle('sticky', window.scrollY > 0);
});

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
