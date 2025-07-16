$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on("scroll", function() {
        const header = $('header');
        const scrollPos = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        
        
        if(scrollPos <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css("transition", "box-shadow 0.3s ease-in-out");
            header.css('box-shadow', '5px 5px 10px 0px rgba(0, 0, 0, 0.09)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPos > sectionTop && scrollPos < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: "left",
        distance: "20%",
        duration: 2000,
    });

    

    ScrollReveal().reveal('#dishes', {
        origin: "up",
        distance: "30%",
        duration: 2000,
    });


    ScrollReveal().reveal('#menu', {
        origin: "up",
        distance: "30%",
        duration: 2000,
    });


    ScrollReveal().reveal('#testimonials-content', {
        origin: "right",
        distance: "20%",
        duration: 2000,
    });

    ScrollReveal().reveal('#testimonial-chef', {
        origin: "left",
        distance: "20%",
        duration: 2000,
    });
});

