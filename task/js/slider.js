$(".profile-slider").slick({
  dots: true,
  fade: true,
  asNavFor: '.img-slider',
})

$(".img-slider").slick({
  arrows: false,
  asNavFor: '.profile-slider',
})

jQuery(document).ready(function () {
  jQuery(".profile-slider .slick-prev").html(`<i class="fa-solid fa-circle-left"></i>`);
  jQuery(".profile-slider .slick-next").html(`<i class="fa-solid fa-circle-right"></i>`);
})