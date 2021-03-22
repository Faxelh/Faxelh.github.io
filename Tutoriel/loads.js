
const lay = document.getElementById("preload");
setTimeout(function (){
  lay.classList.add("quitter");
  lay.style.transform="scale(1)";
}, 9000);

/*
const debut = document.querySelectorAll("#star");

debut.forEach((star) => {
  let duration = Math.random() * (1.2 - 0.6) + 0.6;
  star.style.animation = `stars ${duration}s infinite linear`;
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preload-finish");
});
*/
/*const load = document.querySelector(".preloader");
window.addEventListener(".loader",vanish);
function vanish() {
  loader.classList.add("disppear");
}*/

/*
const lay = document.getElementById("preloader");
window.addEventListener('load', function(){
  lay.style.display = 'none';
  lay.classList.add("disppear");
  })
  <div id="preloader">
  <div class="loader"></div>
</div>

#preloader{
  position: fixed;
  left:0; top:0;
  right:0; bottom:0;
  background-color: #000;
  z-index: 1099;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .6s ease;
}
#preloader.loaded{
  visibility: hidden;
  opacity:0;
  z-index: -99;
}
#preloader .loader{
  height: 30px;
  width: 30px;
  border: 3px solid #FF9800;
  border-right:2px solid transparent;
  border-radius:50%;
  animation: preload 1s linear infinite;
}

@keyframes preload{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.disppear{
  animation: vanish 1s forwards;
}
@keyframes vanish {
  100%{
    opacity: 0;
    visibility: hidden;
  }
}
})*/