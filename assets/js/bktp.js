let myButton = document.getElementById('bktp');
//let myGet = document.getElementById('get');
window.onscroll = function() {
  if(window.pageYOffset >= 500) {
     myButton.style.display = 'block';
    // myGet.style.display = 'block';
   } else {
     myButton.style.display = 'none';
     //myGet.style.display = 'none';
    }
  }
  myButton.addEventListener('click', function(){
      window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
      });
  });