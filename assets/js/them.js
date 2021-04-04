
const theme_checkbox = document.getElementById("mods");
const theme = localStorage.getItem("theme");
if (theme) {
  document.documentElement.setAttribute("data-theme", "nuit");
  if (theme === "nuit") {
    theme_checkbox.checked = true;
  }
}
theme_checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "nuit");
    localStorage.setItem("theme", "nuit");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
});
