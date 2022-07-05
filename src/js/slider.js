$(document).ready(function() {

    $('.items').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});