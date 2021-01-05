var blink = document.getElementById('blink');
setInterval(function() {
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 1000);






$(document).ready(function() {
$('.container') .hover(function() {
    $(this)
    .find( '.caption')
    .stop()
    .animate({bottom: '0'}, {duration: 1600, easing: 'easeOutQuart' });
}, function() {
$(this)
.find('.caption')
.stop()
.animate({bottom: '-100px'}, {duration: 1600, easing: 'easeOutQuart'});

}, function() {
    $(this)
    .find('.caption')
    .stop()
    .animate({bottom: '-200px'}, {duration: 1600, easing: 'easeOutQuart'});




});

});