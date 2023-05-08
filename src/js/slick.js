$(document).ready(function () {
    $('.portfolio__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: 
        [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button type="button" class="portfolio__slider-arrow portfolio__slider-arrow--prev">&lt</button>',
                    nextArrow: '<button type="button" class="portfolio__slider-arrow portfolio__slider-arrow--next">&gt</button>'
                }
            }
        ],
    });
})