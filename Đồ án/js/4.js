 var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });


     $(function(){
   $(window).scroll(function() {
    /* Act on the event */
    if ($('html').scrollTop()>100) {

      $('.logo').addClass('chucam');

      $('.menutren').addClass('chuden');

      $('.nutlen').addClass('hienthi');

      $('#chats').addClass('hienthi');
    }
    else{
      $('.logo').removeClass('chucam');

      $('.menutren').removeClass('chuden');

      $('.nutlen').removeClass('hienthi');

      $('#chats').removeClass('hienthi');
    }

   })

   $('.nutlen').click(function(){

    $('html').animate({scrollTop:0});
    
   })
});  
   

$( document ).ready(function(){
    $(".icon_times").click(function(){
        $( this ).closest(".chat-window").remove();
    });
});

$(document).on('click', '.icon_minus', function (e) {
    var toHide = $( this ).closest(".chat-window").find(".chat-body");
    if (toHide.hasClass("panel-hidden")){
        toHide.removeClass("panel-hidden");
        toHide.slideUp();
    }else{
        toHide.addClass("panel-hidden");
        toHide.slideDown();
    }
});     

