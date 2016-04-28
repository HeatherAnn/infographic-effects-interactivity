var $gifts = $('.gifts');
var $body = $('.background');
var $heartbackground;
var backgroundWidth = $body.outerWidth();
var backgroundHeight = $body.outerHeight();

for (i = 0; i < 75; i++) {
  $heartbackground = $('<background>');
  $heartbackground.addClass('heartbackground');
  $heartbackground.css({
    top: Math.random() * backgroundHeight,
    left: Math.random() * backgroundWidth,
    transform: 'rotate(' + Math.random() * 360 + 'deg) scale(' + Math.random() + ')',
    opacity: Math.random()
  });
  $body.append($heartbackground);
}

var spanWidth = $('#text span').width();
$('#text').animate( { width: spanWidth }, 3000 );

$('.hover-heart').on('click', function () {
  $('.hover-heart').toggleClass('appear');
});

$('.click-blush').on('click', function () {
  $('.blush').toggleClass('show');
});

$('.click-heart').on('click', function () {
  $('.heart').toggleClass('show');
});

$('.click-inflate').on('click', function () {
  $('.inflate').toggleClass('appear');
});

$gifts.waypoint(function () {
  $gifts.addClass('animate');
}, { offset:'50%'} );
