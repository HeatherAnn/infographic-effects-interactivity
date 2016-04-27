var $gifts = $('.gifts');

$('.hover-heart').on('click', function () {
  $('.heartbox').toggleClass('show');
});

$('.click-blush').on('click', function () {
  $('.blush').toggleClass('show');
});

$('.click-heart').on('click', function () {
  $('.heart').toggleClass('show');
});

$('.click-inflate').on('click', function () {
  $('.singleheart').toggleClass('bounce');
});

$gifts.waypoint(function () {
  $gifts.addClass('animate');
}, { offset:'50%'} );
