var topEle = $('.topBtn');

var delay = 400;

topEle.on('click', function() {

  $('html').stop().animate({scrollTop: 0}, delay);

});
