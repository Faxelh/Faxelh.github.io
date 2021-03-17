(() =>{
   const openNavMenu = document.querySelector(".open_nav_menu"),
       closeNavMenu = document.querySelector(".close_nav_menu"),
       navMenu = document.querySelector(".nav_menu"),
       menuOverlay = document.querySelector(".menu_overlay"),
       mediaSize = 991;
   openNavMenu.addEventListener("click", toggleNav);
   closeNavMenu.addEventListener("click", toggleNav);
   //fermez le navMenu en cliquant à l'extérieur
   menuOverlay.addEventListener("click", toggleNav);
   function toggleNav() {
      navMenu.classList.toggle("open");
      menuOverlay.classList.toggle("active");
      document.body.classList.toggle("hidden_scrolling");
   }
   navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") &&
          window.innerWidth <= mediaSize){
         // empêcher le comportement de clic d'ancrage par défaut
         event.preventDefault();
         const menuItemHasChildren = event.target.parentElement;
         // si menuItemHasChildren est déjà développé, réduisez-le
         if(menuItemHasChildren.classList.contains("active")){
            collapseSubMenu();
         }
         else{
            // réduire le menu développé existant
            if(navMenu.querySelector(".menu_item_has_children.active")){
               collapseSubMenu();
            }
            // développer un nouveau menu
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub_menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
         }
      }
   });
   function collapseSubMenu(){
      navMenu.querySelector(".menu_item_has_children.active .sub_menu")
          .removeAttribute("style");
      navMenu.querySelector(".menu_item_has_children.active")
          .classList.remove("active");
   }
   function resizeFix(){
      // si navMenu est ouvert, fermez-le
      if(navMenu.classList.contains("open")){
         toggleNav();
      }
      // si menuItemHasChildren est développé, réduisez-le
      if(navMenu.querySelector(".menu_item_has_children.active")){
         collapseSubMenu();
      }
   }
   window.addEventListener("resize", function(){
      if(this.innerWidth > mediaSize){
         resizeFix();
      }
   });
})();