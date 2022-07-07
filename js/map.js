/*스크롤 이미지 애니메이션*/
var daumRoughmapContainer1656645710667 = document.querySelector('#daumRoughmapContainer1656645710667');
var mapInfoWrap = document.querySelector('#map-info-wrap');

$(document).ready(function() {
  $(window).scroll(function () {
    $(daumRoughmapContainer1656645710667).each(function (i) {

        var bottom_of_map = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_map) {
            $(this).animate({ 'opacity': '1' }, 1000);
        }
    });
    $(mapInfoWrap).each(function (i) {

        var bottom_of_map_info = $(this).offset().top + $(this).outerHeight()/5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_map_info) {
            $(this).animate({ 'opacity': '1' }, 2000);
        }
    });
});
}); 
