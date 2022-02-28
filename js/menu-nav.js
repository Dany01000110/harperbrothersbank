$('.button-menu-mobile').click(function(e) {
    e.preventDefault();
    $('.left').toggleClass('active');
    $('.right').toggleClass('active');
    $('.button-menu-mobile').toggleClass('active');
    $('.button-menu-mobile-close').toggleClass('active');
});

$('.button-menu-mobile-close').click(function(e) {
    e.preventDefault();
    $('.left').toggleClass('active');
    $('.button-menu-mobile').toggleClass('active');
    $('.button-menu-mobile-close').toggleClass('active');
});