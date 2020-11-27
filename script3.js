//const hamburger = document.querySelector('.headi .navb .nalis .hamburger');
const hamburger = document.querySelector('.headi .navb  .hamburger');
const mobile_menu = document.querySelector('.headi .navb .nalis ul');
const menu_item = document.querySelectorAll('.headi .navb .nalis ul li a');
const header = document.querySelector('.headi');
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const form = document.querySelector("form");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = '#E81341';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
/*****************************************************/
// Recherche boutons
cancelBtn.onclick = ()=>{
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

/*****************************************************/
const btp = document.querySelector("#up");
window.addEventListener("scroll", fonctionDefile);
function fonctionDefile() {
    if (window.pageYOffset > 300) { // Afficher le bouton en haut
        if(!btp.classList.contains("btnEn")) {
            btp.classList.remove("btnEx");
            btp.classList.add("btnEn");
            btp.style.display = "block";
        }
    }
    else { // Masquer le bouton retour en haut
        if(btp.classList.contains("btnEn")) {
            btp.classList.remove("btnEn");
            btp.classList.add("btnEx");
            setTimeout(function() {
                btp.style.display = "none";
            }, 250);
        }
    }
}
btp.addEventListener("click", lissedefileHaut);
/*****************************************************/
// function backToTop() {
//   window.scrollTo(0, 0);
// }
function lissedefileHaut() {
    const PositionCible = 0;
    const PositionInitiale = window.pageYOffset;
    const distance = PositionCible - PositionInitiale;
    const duration = 950;
    let debut = null;
    window.requestAnimationFrame(etape);
    function etape(timestamp) {
        if (!debut) debut = timestamp;
        const progress = timestamp - debut;
        window.scrollTo(0, easeInOutCubic(progress, PositionInitiale, distance, duration));
        if (progress < duration) window.requestAnimationFrame(etape);
    }
}
/*****************************************************/
function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};
/*****************************************************/
const counters = document.querySelectorAll('.counter');
const speed = 20; //Plus bas est plus lent
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        // Diminuer l'augmentation pour ralentir et augmenter pour ralentir
        const inc = target / speed;
        // console.log(inc);
        // console.log(count);
        // Vérifier si l'objectif est atteint
        if (count < target) {
            // Ajouter inc pour compter et sortir dans le compteur
            counter.innerText = count + inc;
            // Fonction d'appel toutes les ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
