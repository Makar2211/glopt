var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
$(document).ready(function(){
  $('[data-model=consultation]').on('click', function(){
    $('.overlay, #consalting').fadeIn();
  })
  $('.model__close').on('click', function(){
    $('.overlay, #consalting').fadeOut('slow');
  });
});