
const burger = document.querySelector(".burger");
const dropdown_btns = document.querySelectorAll(".dropdown-btn");
burger.addEventListener("click", () => {
  const navbar_content = document.querySelector(".navbar_content");
  burger.classList.toggle("active");
  navbar_content.classList.toggle("show");
});


dropdown_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dropdown = e.currentTarget.nextElementSibling;
    dropdown.classList.toggle("show");
    document.querySelectorAll(".dropdown-btn + .dropdown-list")
        .forEach((dropdown) => {
          if (dropdown !== e.currentTarget.nextElementSibling) {
            dropdown.classList.remove("show");
          }
        });
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".dropdown-btn")) {
    const dropdowns = document.querySelectorAll(".dropdown-list");
    dropdowns.forEach((drpodown) => {
      drpodown.classList.remove("show");
    });
  }
};

const menu_sign = document.querySelector(".sign_menu"),
 actionBtn = document.querySelector(".nvb__btn");
actionBtn.addEventListener("click", () => {
  menu_sign.classList.toggle("open")
})

const body = document.querySelector(".loader");
setTimeout(function (){
  body.classList.add("back");
}, 5000);

window.addEventListener('load', function () {
  let intro = document.querySelector('.loader')
  setTimeout(() => {
    intro.classList.remove('transi');
  }, 100);
})