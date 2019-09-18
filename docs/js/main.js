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

function showImageFromGallery_13() {
    let img = $('section.latest-projects-gallery > button:nth-child(14) > img');
    showImg(img);
}


function showImageFromGallery_14() {
    let img = $('section.latest-projects-gallery > button:nth-child(15) > img');
    showImg(img);
}

function showImageFromGallery_15() {
    let img = $('section.latest-projects-gallery > button:nth-child(16) > img');
    showImg(img);
}

function showImageFromGallery_16() {
    let img = $('section.latest-projects-gallery > button:nth-child(17) > img');
    showImg(img);
}

function showImageFromGallery_17() {
    let img = $('section.latest-projects-gallery > button:nth-child(18) > img');
    showImg(img);
}

function showImageFromGallery_18() {
    let img = $('section.latest-projects-gallery > button:nth-child(19) > img');
    showImg(img);
}

function showImageFromGallery_19() {
    let img = $('section.latest-projects-gallery > button:nth-child(20) > img');
    showImg(img);
}

function showImageFromGallery_20() {
    let img = $('section.latest-projects-gallery > button:nth-child(21) > img');
    showImg(img);
}

function showImageFromGallery_21() {
    let img = $('section.latest-projects-gallery > button:nth-child(22) > img');
    showImg(img);
}

function showImageFromGallery_22() {
    let img = $('section.latest-projects-gallery > button:nth-child(23) > img');
    showImg(img);
}

function showImageFromGallery_23() {
    let img = $('section.latest-projects-gallery > button:nth-child(24) > img');
    showImg(img);
}

function showImageFromGallery_24() {
    let img = $('section.latest-projects-gallery > button:nth-child(25) > img');
    showImg(img);
}

function showImg(img) {
    let src = img.attr('src');
    $('#image-to-show').attr('src', `${src}`);
    $('.single-view').css('display', 'flex');
    if (src.toString().endsWith('/one.jpg')) {
        $('#left').css('visibility', 'hidden');
        $('#right').css('visibility', 'visible');
    } else if (src.toString().endsWith('/twenty-five.jpg')) {
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
    currentSrc = currentSrc.toString();
    let result = "";
    if (currentSrc.endsWith('/one.jpg')) {
        result = currentSrc.replace('one', 'two');
    } else if (currentSrc.endsWith('/two.jpg')) {
        result = currentSrc.replace('two', 'three');
    } else if (currentSrc.endsWith('/three.jpg')) {
        result = currentSrc.replace('three', 'four');
    } else if (currentSrc.endsWith('/four.jpg')) {
        result = currentSrc.replace('four', 'five');
    } else if (currentSrc.endsWith('/five.jpg')) {
        result = currentSrc.replace('five', 'six');
    } else if (currentSrc.endsWith('six.jpg')) {
        result = currentSrc.replace('six', 'seven');
    } else if (currentSrc.endsWith('seven.jpg')) {
        result = currentSrc.replace('seven', 'eight');
    } else if (currentSrc.endsWith('eight.jpg')) {
        result = currentSrc.replace('eight', 'nine');
    } else if (currentSrc.endsWith('nine.jpg')) {
        result = currentSrc.replace('nine', 'ten');
    } else if (currentSrc.endsWith('ten.jpg')) {
        result = currentSrc.replace('ten', 'eleven');
    } else if (currentSrc.endsWith('eleven.jpg')) {
        result = currentSrc.replace('eleven', 'twelve');
    } else if (currentSrc.endsWith('twelve.jpg')) {
        result = currentSrc.replace('twelve', 'thirteen');
    } else if (currentSrc.endsWith('thirteen.jpg')) {
        result = currentSrc.replace('thirteen', 'fourteen');
    } else if (currentSrc.endsWith('fourteen.jpg')) {
        result = currentSrc.replace('fourteen', 'fifteen');
    } else if (currentSrc.endsWith('fifteen.jpg')) {
        result = currentSrc.replace('fifteen', 'sixteen');
    } else if (currentSrc.endsWith('sixteen.jpg')) {
        result = currentSrc.replace('sixteen', 'seventeen');
    } else if (currentSrc.endsWith('seventeen.jpg')) {
        result = currentSrc.replace('seventeen', 'eighteen');
    } else if (currentSrc.endsWith('eighteen.jpg')) {
        result = currentSrc.replace('eighteen', 'nineteen');
    } else if (currentSrc.endsWith('nineteen.jpg')) {
        result = currentSrc.replace('nineteen', 'twenty');
    } else if (currentSrc.endsWith('twenty.jpg')) {
        result = currentSrc.replace('twenty', 'twenty-one');
    } else if (currentSrc.endsWith('twenty-one.jpg')) {
        result = currentSrc.replace('twenty-one', 'twenty-two');
    } else if (currentSrc.endsWith('twenty-two.jpg')) {
        result = currentSrc.replace('twenty-two', 'twenty-three');
    } else if (currentSrc.endsWith('twenty-three.jpg')) {
        result = currentSrc.replace('twenty-three', 'twenty-four');
    } else if (currentSrc.endsWith('twenty-four.jpg')) {
        result = currentSrc.replace('twenty-four', 'twenty-five');
    }
    img.attr('src', `${result}`);
    showImg(img);
}

function showPreviousImg() {
    let img = $('#image-to-show');
    let currentSrc = img.attr('src');
    currentSrc = currentSrc.toString();
    let result = "";
    if (currentSrc.endsWith('/two.jpg')) {
        result = currentSrc.replace('two', 'one');
    } else if (currentSrc.endsWith('/three.jpg')) {
        result = currentSrc.replace('three', 'two');
    } else if (currentSrc.endsWith('/four.jpg')) {
        result = currentSrc.replace('four', 'three');
    } else if (currentSrc.endsWith('/five.jpg')) {
        result = currentSrc.replace('five', 'four');
    } else if (currentSrc.endsWith('six.jpg')) {
        result = currentSrc.replace('six', 'five');
    } else if (currentSrc.endsWith('seven.jpg')) {
        result = currentSrc.replace('seven', 'six');
    } else if (currentSrc.endsWith('eight.jpg')) {
        result = currentSrc.replace('eight', 'seven');
    } else if (currentSrc.endsWith('nine.jpg')) {
        result = currentSrc.replace('nine', 'eight');
    } else if (currentSrc.endsWith('ten.jpg')) {
        result = currentSrc.replace('ten', 'nine');
    } else if (currentSrc.endsWith('eleven.jpg')) {
        result = currentSrc.replace('eleven', 'ten');
    } else if (currentSrc.endsWith('twelve.jpg')) {
        result = currentSrc.replace('twelve', 'eleven');
    } else if (currentSrc.endsWith('thirteen.jpg')) {
        result = currentSrc.replace('thirteen', 'twelve');
    } else if (currentSrc.endsWith('fourteen.jpg')) {
        result = currentSrc.replace('fourteen', 'thirteen');
    } else if (currentSrc.endsWith('fifteen.jpg')) {
        result = currentSrc.replace('fifteen', 'fourteen');
    } else if (currentSrc.endsWith('sixteen.jpg')) {
        result = currentSrc.replace('sixteen', 'fifteen');
    } else if (currentSrc.endsWith('seventeen.jpg')) {
        result = currentSrc.replace('seventeen', 'sixteen');
    } else if (currentSrc.endsWith('eighteen.jpg')) {
        result = currentSrc.replace('eighteen', 'seventeen');
    } else if (currentSrc.endsWith('nineteen.jpg')) {
        result = currentSrc.replace('nineteen', 'eighteen');
    } else if (currentSrc.endsWith('twenty.jpg')) {
        result = currentSrc.replace('twenty', 'nineteen');
    } else if (currentSrc.endsWith('twenty-one.jpg')) {
        result = currentSrc.replace('twenty-one', 'twenty');
    } else if (currentSrc.endsWith('twenty-two.jpg')) {
        result = currentSrc.replace('twenty-two', 'twenty-one');
    } else if (currentSrc.endsWith('twenty-three.jpg')) {
        result = currentSrc.replace('twenty-three', 'twenty-two');
    } else if (currentSrc.endsWith('twenty-four.jpg')) {
        result = currentSrc.replace('twenty-four', 'twenty-three');
    } else if (currentSrc.endsWith('twenty-five.jpg')) {
        result = currentSrc.replace('twenty-five', 'twenty-four');
    }
    img.attr('src', `${result}`);
    showImg(img);
}