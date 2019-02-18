 $(function(){
   $(window).scroll(function() {
    /* Act on the event */
    if ($('html').scrollTop()>100) {

      $('.logo').addClass('chucam');

      $('.menutren').addClass('chuden');

      $('.nutlen').addClass('hienthi');
    }
    else{
      $('.logo').removeClass('chucam');

      $('.menutren').removeClass('chuden');

      $('.nutlen').removeClass('hienthi');
    }

   })

   $('.nutlen').click(function(){

    $('html').animate({scrollTop:0});
    
   })
})  
   
     