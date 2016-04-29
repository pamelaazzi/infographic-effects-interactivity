var $body = $('.banner');
var $pop = $('.pop');
var $pills;
var bannerWidth = $body.outerWidth();
var bannerHeight = $body.outerHeight();

$('ul').localScroll();

for (i = 0; i < 40; i++) {
  $pills = $('<div>');
  $pills.addClass('pills');
  $pills.css({
    top: Math.random() * 100 + ''%'',
    left: Math.random() * 100 + ''%'',
    transform: 'rotate(' + Math.random() * 180 + 'deg) scale(' + Math.random() + ')'
  });
  $body.append($pills);
}

$pop.waypoint(function (direction) {
  if (direction == 'down') {
    $pop.addClass('js-pop-animate');
  } else {
    $pop.removeClass('js-pop-animate');
  }
},{offset: '50%' });
