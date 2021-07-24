
let drop_btn = document.querySelector(".drop-btn span"),
	 tooltip = document.querySelector(".tooltip"),
	 menu_wrapper = document.querySelector(".wrapper"),
	 menu_bar = document.querySelector(".menu-bar"),
	 setting_drop = document.querySelector(".setting-drop"),
	 help_drop = document.querySelector(".help-drop"),
	 setting_item = document.querySelector(".setting-item"),
	 help_item = document.querySelector(".help-item"),
	 setting_btn = document.querySelector(".back-setting-btn"),
	 help_btn = document.querySelector(".back-help-btn");

drop_btn.onclick = (()=>{
	menu_wrapper.classList.toggle("shower");
	tooltip.classList.toggle("shower");
	drop_btn.classList.toggle("shower");
});
setting_item.onclick = (()=>{
	menu_bar.style.marginLeft = "-400px";
	setTimeout(()=>{
		setting_drop.style.display = "block";
	}, 100);
});

help_item.onclick = (()=>{
	menu_bar.style.marginLeft = "-400px";
	setTimeout(()=>{
		help_drop.style.display = "block";
	}, 100);
});

setting_btn.onclick = (()=>{
	menu_bar.style.marginLeft = "0px";
	setting_drop.style.display = "none";
});
help_btn.onclick = (()=>{
	help_drop.style.display = "none";
	menu_bar.style.marginLeft = "0px";
});

