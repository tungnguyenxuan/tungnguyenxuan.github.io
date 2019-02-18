


$(document).ready(function() {
	$('.noidungthem').slideUp(0);


	$('#nutload').click(function (event) {

		// body...
		$('.noidungthem').slideDown();

		
	})
});




var swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	spaceBetween: 30,
	grabCursor: true,


	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

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
   
     


$(function() {
	new WOW().init();
});