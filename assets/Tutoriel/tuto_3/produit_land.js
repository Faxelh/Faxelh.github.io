$(document).ready(function(){
   $('#menu').click(function(){
      $(this).toggleClass('bx-x');
      $('.navbar').toggleClass('nav-toggle');
   });
   $(window).on('load scroll',function(){
      $('#menu').removeClass('bx-x');
      $('.navbar').removeClass('nav-toggle');
      $('section').each(function(){
         let top = $(window).scrollTop();
         let height = $(this).height();
         let offset = $(this).offset().top - 200;
         let id = $(this).attr('id');
         if(top > offset && top < offset + height){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
         }
      });
   });
});
