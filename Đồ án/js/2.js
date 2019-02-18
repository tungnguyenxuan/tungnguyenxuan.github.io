    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
   
 
// $(document).ready(function(){

//     $(".filter-button").click(function(){
//         var value = $(this).attr('data-filter');
        
//         if(value == "all")
//         {
//             //$('.filter').removeClass('hidden');
//             $('.filter').show('1000');
//         }
//         else
//         {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//             $(".filter").not('.'+value).hide('3000');
//             $('.filter').filter('.'+value).show('3000');
            
//         }
//     });

// });


// $(function() {
//   $('.sanpham .grid .row .box .khoi').isotope({
//     itemSelector: 'img-box'
    
//   });
// })


// code cho phần quicksearch

// $('.tukhoa').keypress(function(event) {
//   /* Act on the event */

//   if (event.keyCode == '13') {

//     tu1 = $('.tukhoa').val();

//     tu1 = "." +tu1;
//     $('.content ul').isotope({filter:tu1});

//     console.log('bạn vừa ấn enter');
//   }


// });

//   //Quét lại nội dung search vào đây. Tự động lọc nội dung

//   thoigian=setInterval(function(){

//     tu1 = $('.tukhoa').val();

//     tu1 = "." +tu1;
//     $('.content ul').isotope({filter:tu1});

//   },200)



//   //code cho phần nút

//   $('.tren.phiatren').click(function(event){

//     var danhmuc = $(this).data('class');
//     //Xem tất cả ảnh
//     if (danhmuc == 'all')
//     {
//       $('.sanpham.container.row ').isotope({
//         filter:'*'
//         // * là tất cả
//       });
//     }
//     else{

//     $('.sanpham.container.row').isotope({filter:danhmuc});
//     }
    



//     return false;
//   });
// });

  $(document).ready(function() {

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".myDiv .khoi").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
