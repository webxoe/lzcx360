var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    speed: 600,
    effect: 'fade',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});
$(function () {
    $('.rightIco6 a').click(function () {
        $('html,body').animate({ scrollTop: 0}, 1000);
    })
});





