function start() {
    //make all the transition wait untill the page is loaded
    document.body.classList.add('js-loading');
    window.addEventListener("load", showPage);

    function showPage() {
        document.body.classList.remove('js-loading');
    }
    //btn up
    $('.btn-up').css('display', 'none');
    let wrap = $("#top-middle-menu");
    window.onscroll = function() {
        scrollFunction();
    };
    //sticky navigation
    function scrollFunction() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            $('#return-to-top').css('display', 'block');
            wrap.addClass('sticky');
        } else {
            $('#return-to-top').css('display', 'none');
            wrap.removeClass('sticky');
        }
    }
    let str = location.href.toLowerCase();
    $('nav.top-middle-menu > ul > li > a').removeClass('active');
    if ((str === 'http://localhost:3000/') || (str === 'https://gerganatsirkova.github.io/slavi/') || (str === 'http://localhost:3000/en/') || (str === 'https://gerganatsirkova.github.io/slavi/en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(1) > a').addClass('active');
    } else if (str.endsWith('/services/') || str.endsWith('/services-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(2) > a').addClass('active');
    } else if (str.endsWith('/gallery/') || str.endsWith('/gallery-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(3) > a').addClass('active');
    } else if (str.endsWith('/contacts/') || str.endsWith('/contacts-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(5) > a').addClass('active');
    } else {
        $('nav.top-middle-menu > ul > li:nth-child(4) > a').addClass('active');
    }

    // let submitMessage = $('#submitMessage');
    // submitMessage.on('click', function() {
    //     $('#name').val('');
    //     $('#email').val('');
    //     $('#message').val('');
    // });
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openMobileMenu() {
    $('.slide-menu').css('display', 'block');
    $('.btn-menu-open').css('display', 'none');
    $('.btn-menu-close').css('display', 'block');
}

function closeMobileMenu() {
    $('.slide-menu').css('display', 'none');
    $('.btn-menu-open').css('display', 'block');
    $('.btn-menu-close').css('display', 'none');
}