$(function() {
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left " src="images/arrow-left.png" alt="">',
        nextArrow: '<img class="slider__arrow slider__arrow-right " src="images/arrow-right.png" alt="">',

        responsive: [{
            breakpoint: 620,
            settings: {
                arrows: false
            }
        }]
    });
    $('.menu__btn').on('click', function() {
        $('.nav__items').toggleClass('active');
    });

});