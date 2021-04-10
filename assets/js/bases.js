
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
const menu_sign = document.querySelector(".sign_menu"),
    actionBtn = document.querySelector("#nvb__btn");
actionBtn.addEventListener("click", () => {
  menu_sign.classList.toggle("open")
})
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

/*document.addEventListener('scroll', () => {
  const scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#202b2f';
  } else {
    header.style.backgroundColor = '#f80';
  }
});
*/