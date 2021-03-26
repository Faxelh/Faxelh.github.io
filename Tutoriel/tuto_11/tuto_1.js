var type = new Typed('.types',{
   strings : [ 'Hacker', 'Web designer', 'Front end developer'],
   typeSpeed: 130,
   loop:true
});
let themeColor = document.querySelectorAll('.theme span');
themeColor.forEach(color => color.addEventListener('click', () =>{
   document.querySelector('body').style.background = color.style.background;
}));