AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {
    "use strict";

    // Initialize Stellar.js
    $(window).stellar({
        responsive: true,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: false,
        scrollProperty: 'scroll'
    });

    // Set full height for elements with class .js-fullheight
    var fullHeight = function() {
        const setHeight = () => $('.js-fullheight').css('height', $(window).height());
        setHeight();
        $(window).resize(setHeight);
    };
    fullHeight();

    // Loader function
    var loader = function() {
        setTimeout(function() {
            if ($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax initialization
    $.Scrollax();

    // Burger Menu
    var burgerMenu = function() {
        $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
        });
    };
    burgerMenu();

    // Smooth scrolling for one-page navigation
    var onePageClick = function() {
        $(document).on('click', '#ftco-nav a[href^="#"]', function(event) {
            event.preventDefault();
            const href = $.attr(this, 'href');
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70
            }, 500);
        });
    };
    onePageClick();

    // Carousel setup
    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1000: { items: 1 }
            }
        });
    };
    carousel();

    // Dropdown hover functionality
    $('nav .dropdown').hover(function() {
        $(this).addClass('show').find('> a').attr('aria-expanded', true);
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show').find('> a').attr('aria-expanded', false);
        $(this).find('.dropdown-menu').removeClass('show');
    });

    // Scroll event handling
    var scrollWindow = function() {
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled sleep');
            }
            if (st > 350) {
                navbar.addClass('awake');
                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            } else {
                navbar.removeClass('awake').addClass('sleep');
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    // Counter functionality
    var counter = function() {
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
                $('.number').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000);
                });
            }
        }, { offset: '95%' });
    };
    counter();

    // Animation on scroll
    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint(function(direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function() {
                    $('body .ftco-animate.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            el.addClass(effect ? effect + ' ftco-animated' : 'fadeInUp ftco-animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, { offset: '95%' });
    };
    contentWayPoint();

    // Magnific Popup for images
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    // Magnific Popup for videos
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

})(jQuery);
