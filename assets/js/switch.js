
let  circle = document.querySelector('#cursor-circle'),
     links =document.querySelectorAll(".alternate-style");
totalLinks = links.length;

function setActiveStyle(color){
    for(let i = 0; i<totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}
/* Cursor */
window.addEventListener('mousemove', function(mx){
    let xValue = mx.clientX;
    let yValue = mx.clientY;
    
    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});
