
window.addEventListener("load", function(){
    this.setTimeout(() => {
        this.document.querySelector(".preloader3").style.display="none";
    },1000)
})
// Portfolio item filter
let filterContainer = document.querySelector(".portfolio-filter"),
   filterBtns = filterContainer.children,
   totalFilterBtns = filterBtns.length,
   portfolioItems = document.querySelectorAll(".portfolio-items"),
   totalPortfolioItem=portfolioItems.length;

for(let i=0; i<totalFilterBtns; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active");
        
        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k<totalPortfolioItem; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
            else{
                portfolioItems[k].classList.add("hide");
                portfolioItems[k].classList.remove("show");
            }
            if(filterValue==="all"){
                portfolioItems[k].classList.add("show");
                portfolioItems[k].classList.remove("hide");
            }
        }
    })
}

// Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
   lightboxImg = lightbox.querySelector(".lightbox-img"),
   lightboxClose = lightbox.querySelector(".lightbox-close"),
   lightboxText = lightbox.querySelector(".caption-text"),
   lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++;
    }
    changeItem();
}
function prevItem(){
    if(itemIndex === 0){
        itemIndex= totalPortfolioItem-1;
    }
    else{
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}


function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".port-img img").getAttribute("src");
    console.log(imgSrc);
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
}

// Close Lightbox
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})

// Aside Navbar
const nav = document.querySelector(".nav"),
   navList = nav.querySelectorAll("li"),
   totalNavList = navList.length,
   allSection = document.querySelectorAll(".section");
totalSection = allSection.length;

for(let i = 0; i<totalNavList; i++){
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click",function(){
        // Supprimer la classe de section arrière
        for(let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
        for(let j = 0; j<totalNavList; j++){
            // Ajouter une classe de section arrière
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

function updateNav(element){
    for(let i = 0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.remove("back-section")
    }
    allSection[sectionIndex].classList.add("back-section");
})

let navTogglerBtn = document.querySelector(".nav_toggle"),
   aside = document.querySelector(".aside");

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i<totalSection; i++){
        allSection[i].classList.toggle("open")
    }
}

// Selecteur et Applicateur de Style
let SetSwitcher = (ToggleSwitch, StyleSwitch, ToggleSwitchIcon, navTogglerBtn, AsideBtn) =>{
    document.getElementById(AsideBtn);
    let Switch = document.getElementById(ToggleSwitch),
       Style = document.getElementById(StyleSwitch),
       Icon = document.getElementById(ToggleSwitchIcon),
       Nav = document.getElementById(navTogglerBtn)
    
    if(ToggleSwitch && StyleSwitch && ToggleSwitchIcon && navTogglerBtn && AsideBtn){
        Switch.addEventListener('click', ()=>{
            Style.classList.toggle('open')
            Icon.classList.toggle('bx-x')
        })
    }
    Nav.addEventListener("click",() =>{
        asideSectionTogglerBtn();
        document.querySelector(".style-switcher").classList.remove("open");
        document.querySelector(".new-mail").classList.remove("active");
        document.querySelector(".new__button").classList.remove("active");
        document.querySelector(".wrapper").classList.remove("shower");
        document.querySelector(".drop-btn span").classList.remove("shower");
        document.querySelector(".tooltip").classList.remove("shower");
        NewmailIconPlus.classList.remove('bx-x');
        Icon.classList.remove('bx-x');
    })
    window.onscroll = () =>{
        document.querySelector(".style-switcher").classList.remove("open");
        document.querySelector(".new-mail").classList.remove("active");
        document.querySelector(".new__button").classList.remove("active");
        document.querySelector(".wrapper").classList.remove("shower");
        document.querySelector(".drop-btn span").classList.remove("shower");
        document.querySelector(".tooltip").classList.remove("shower");
        NewmailIconPlus.classList.remove('bx-x')
        Icon.classList.remove('bx-x')
    }
}
SetSwitcher('toggle-switcher','style-switcher', 'icon-switcher', 'nav_toggle', 'aside')

// Mode sombre et clair
let ThemeId = document.getElementById('DarkLight'),
   themeSombre = 'darken',
   iconTheme  =  'bx-sun';

let choixThemes = localStorage.getItem('selected-theme'),
   choixIcons = localStorage.getItem('selected-icon'),
   getCurrentTheme = () => document.body.classList.contains(themeSombre) ? 'dark' : 'light',
   getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if(choixThemes) {
    document.body.classList[choixThemes === 'dark' ? 'add' : 'remove'](themeSombre)
    ThemeId.classList[choixIcons === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
ThemeId.addEventListener('click', () => {
    document.body.classList.toggle(themeSombre)
    ThemeId.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// New Message Button active
let NewMailToggle = document.querySelectorAll(".new-mail__toggle"),
   Newmail =  document.querySelector(".new-mail"),
   NewmailBtn = document.querySelector(".new__button"),
   NewmailIconPlus = document.querySelector('.new__button i');

NewMailToggle.forEach(el => {
    el.addEventListener("click", () => {
        Newmail.classList.toggle("active");
        NewmailBtn.classList.toggle("active");
        NewmailIconPlus.classList.toggle('bx-x')
    });
});

/* FullScreen Enter and Exit */
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
let fullscreen;
let EnterFullScreen = document.getElementById('fullscreen');
EnterFullScreen.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        EnterFullScreen.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        EnterFullScreen.innerHTML = "Fullscreen";
    }
});

/* Button Download Count*/
let Telechargement = document.getElementById("download_btn"),
   compteArebours = document.querySelector(".countdown"),
   Patientez = document.querySelector(".wait"),
   TelechargementManuel = document.querySelector(".down_manual"),
   LienTelechargementManuel = document.querySelector(".down_manual_link");
let temps = 59;

Telechargement.addEventListener("click", () => {
    Telechargement.style.display = "none";
    compteArebours.innerHTML = "Le téléchargement débute dans <span>" + temps + "</span> s.";
    let tempsTelechargement = setInterval(function timeCount() {
        temps -= 1;
        compteArebours.innerHTML = "Le téléchargement débute dans <span>" + temps + "</span> s.";
        if (temps <= 0) {
            clearInterval(tempsTelechargement);
            Patientez.style.display = "block";
            let href_telechager = "TestFile.zip"; // entrez l'URL du lien du fichier a téléchargé  ici
            window.location.href = href_telechager;
            LienTelechargementManuel.href = href_telechager;
            setTimeout(() => {
                Patientez.style.display = "none";
                TelechargementManuel.style.display = "block";
            }, 4000);
        }
    }, 1000);
});

/*Follow Box JS*/
const end = document.querySelector('.closed'),
   modal = document.querySelector('.follow_box_container');
window.onload = function (){
    setTimeout(function (){
        modal.classList.toggle('togglePopup');
    } , 15000)
}
end.addEventListener('click', () => {
    modal.classList.remove('togglePopup')
});

/* Super Nav JS*/
let Supers = document.querySelector('.Super'),
   Targets = document.querySelectorAll('.Target'),
   SuperNavLink = document.querySelector('.SuperNav--link');
Supers.addEventListener('click', () => {
    Targets.forEach((item) => {
        item.classList.toggle('move-down')
    });
    SuperNavLink.forEach((item) => {
        item.classList.remove('move-down')
    })
})
/* Three Dot For Mobile Toggle */
let Toggles = document.getElementById('toggles'),
   MobNav = document.getElementById('mob-nav');
Toggles.onclick = function(){
    Toggles.classList.toggle('active-toggle');
    MobNav.classList.toggle('active-mob');
}
document.onclick = function(e){
    if(e.target.id !== 'toggles' && e.target.id !== 'mob-nav'){
        Toggles.classList.remove('active-toggle');
        MobNav.classList.remove('active-mob');
    }
}

/* Typed  JS*/
let typed = new Typed('#typing', {
    strings : ['Hacker & Web developer ^500', 'Web designer ^700', 'front end developer ^900'],
    loop : true,
    showCursor: true,
    cursorChar: '_',
    typeSpeed : 110
});

let type = new Typed('#typing-about', {
    strings : ['Hacker & Web developer ^400', 'Web designer ^500', 'front end developer ^700'],
    loop : true,
    showCursor: true,
    cursorChar: '*',
    typeSpeed : 120
});