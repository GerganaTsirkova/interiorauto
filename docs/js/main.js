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
    if ((str === 'http://localhost:3000/') || (str === 'https://gerganatsirkova.github.io/interiorauto/') || (str === 'http://localhost:3000/en/') || (str === 'https://gerganatsirkova.github.io/interiorauto/en/') || (str === 'https://interiorauto.bg/') || (str === 'https://interiorauto.bg/en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(1) > a').addClass('active');
    } else if (str.endsWith('/services/') || str.endsWith('/services-en/') ||
        str.endsWith('/service-cleaning/') || str.endsWith('/service-cleaning-en/') ||
        str.endsWith('/service-leather/') || str.endsWith('/service-leather-en/') ||
        str.endsWith('/service-details/') || str.endsWith('/service-details-en/') ||
        str.endsWith('/service-airbag/') || str.endsWith('/service-airbag-en/') ||
        str.endsWith('/service-items/') || str.endsWith('/service-items-en/') ||
        str.endsWith('/service-wheels/') || str.endsWith('/service-wheels-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(2) > a').addClass('active');
    } else if (str.endsWith('/gallery/') || str.endsWith('/gallery-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(3) > a').addClass('active');
    } else if (str.endsWith('/latest-projects/') || str.endsWith('/latest-projects-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(4) > a').addClass('active');
    } else if (str.endsWith('/contacts/') || str.endsWith('/contacts-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(6) > a').addClass('active');
    } else if (str.endsWith('/about/') || str.endsWith('/about-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(5) > a').addClass('active');
    } else {
        $('nav.top-middle-menu > ul > li > a').removeClass('active');

    }
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

// Latest projects gallery functionalities

function showImageFromGallery_0() {
    let img = $('section.latest-projects-gallery > button:nth-child(1) > img');
    showImg(img);
}

function showImageFromGallery_1() {
    let img = $('section.latest-projects-gallery > button:nth-child(2) > img');
    showImg(img);
}

function showImageFromGallery_2() {
    let img = $('section.latest-projects-gallery > button:nth-child(3) > img');
    showImg(img);
}

function showImageFromGallery_3() {
    let img = $('section.latest-projects-gallery > button:nth-child(4) > img');
    showImg(img);
}

function showImageFromGallery_4() {
    let img = $('section.latest-projects-gallery > button:nth-child(5) > img');
    showImg(img);
}

function showImageFromGallery_5() {
    let img = $('section.latest-projects-gallery > button:nth-child(6) > img');
    showImg(img);
}

function showImageFromGallery_6() {
    let img = $('section.latest-projects-gallery > button:nth-child(7) > img');
    showImg(img);
}

function showImageFromGallery_7() {
    let img = $('section.latest-projects-gallery > button:nth-child(8) > img');
    showImg(img);
}

function showImageFromGallery_8() {
    let img = $('section.latest-projects-gallery > button:nth-child(9) > img');
    showImg(img);
}

function showImageFromGallery_9() {
    let img = $('section.latest-projects-gallery > button:nth-child(10) > img');
    showImg(img);
}

function showImageFromGallery_10() {
    let img = $('section.latest-projects-gallery > button:nth-child(11) > img');
    showImg(img);
}

function showImageFromGallery_11() {
    let img = $('section.latest-projects-gallery > button:nth-child(12) > img');
    showImg(img);
}

function showImageFromGallery_12() {
    let img = $('section.latest-projects-gallery > button:nth-child(13) > img');
    showImg(img);
}

function showImageFromGallery_14() {
    let img = $('section.latest-projects-gallery > button:nth-child(14) > img');
    showImg(img);
}

function showImageFromGallery_15() {
    let img = $('section.latest-projects-gallery > button:nth-child(15) > img');
    showImg(img);
}

function showImageFromGallery_16() {
    let img = $('section.latest-projects-gallery > button:nth-child(16) > img');
    showImg(img);
}

function showImageFromGallery_17() {
    let img = $('section.latest-projects-gallery > button:nth-child(17) > img');
    showImg(img);
}

function showImageFromGallery_18() {
    let img = $('section.latest-projects-gallery > button:nth-child(18) > img');
    showImg(img);
}

function showImageFromGallery_19() {
    let img = $('section.latest-projects-gallery > button:nth-child(19) > img');
    showImg(img);
}

function showImageFromGallery_20() {
    let img = $('section.latest-projects-gallery > button:nth-child(20) > img');
    showImg(img);
}

function showImageFromGallery_21() {
    let img = $('section.latest-projects-gallery > button:nth-child(21) > img');
    showImg(img);
}

function showImageFromGallery_22() {
    let img = $('section.latest-projects-gallery > button:nth-child(22) > img');
    showImg(img);
}

function showImageFromGallery_23() {
    let img = $('section.latest-projects-gallery > button:nth-child(23) > img');
    showImg(img);
}

function showImageFromGallery_24() {
    let img = $('section.latest-projects-gallery > button:nth-child(24) > img');
    showImg(img);
}

function showImg(img) {
    let src = img.attr('src');
    $('#image-to-show').attr('src', `${src}`);
    $('.single-view').css('display', 'flex');
    if (src.endsWith('0.jpg')) {
        $('#left').css('visibility', 'hidden');
        $('#right').css('visibility', 'visible');
    } else if (src.endsWith('24.jpg')) {
        $('#left').css('visibility', 'visible');
        $('#right').css('visibility', 'hidden');
    } else {
        $('#left').css('visibility', 'visible');
        $('#right').css('visibility', 'visible');
    }
}

function closeGallery() {
    $('.single-view').css('display', 'none');
}

function showNextImg() {
    let img = $('#image-to-show');
    let currentSrc = img.attr('src');
    console.log(currentSrc.toString());
    if (currentSrc.endsWith('0.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/1.jpg');
    } else if (currentSrc.endsWith('1.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/2.jpg');
    } else if (currentSrc.endsWith('2.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/3.jpg');
    } else if (currentSrc.endsWith('3.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/4.jpg');
    } else if (currentSrc.endsWith('4.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/5.jpg');
    } else if (currentSrc.endsWith('5.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/6.jpg');
    } else if (currentSrc.endsWith('6.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/7.jpg');
    } else if (currentSrc.endsWith('7.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/8.jpg');
    } else if (currentSrc.endsWith('8.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/9.jpg');
    } else if (currentSrc.endsWith('9.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/10.jpg');
    } else if (currentSrc.endsWith('10.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/11.jpg');
    } else if (currentSrc.endsWith('11.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/12.jpg');
    } else if (currentSrc.endsWith('12.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/13.jpg');
    } else if (currentSrc.endsWith('14.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/14.jpg');
    } else if (currentSrc.endsWith('15.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/15.jpg');
    } else if (currentSrc.endsWith('16.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/16.jpg');
    } else if (currentSrc.endsWith('17.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/17.jpg');
    } else if (currentSrc.endsWith('18.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/18.jpg');
    } else if (currentSrc.endsWith('19.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/19.jpg');
    } else if (currentSrc.endsWith('20.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/20.jpg');
    } else if (currentSrc.endsWith('21.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/21.jpg');
    } else if (currentSrc.endsWith('22.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/22.jpg');
    } else if (currentSrc.endsWith('23.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/23.jpg');
    } else if (currentSrc.endsWith('24.jpg')) {
        img.attr('src', 'https://github.com/GerganaTsirkova/interiorauto/tree/master/images/latest-projects/24.jpg');
    }
}

function showPreviousImg() {

}