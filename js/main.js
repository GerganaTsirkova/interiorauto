function start() {
    var str = location.href.toLowerCase();
    $('nav.top-middle-menu > ul > li > a').removeClass('active');
    if ((str === 'http://localhost:3000/') || (str === 'https://gerganatsirkova.github.io/slavi/') || (str === 'http://localhost:3000/en/') || (str === 'https://gerganatsirkova.github.io/slavi/en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(1) > a').addClass('active');
    } else if (str.endsWith('/services/') || str.endsWith('/services-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(2) > a').addClass('active');
    } else if (str.endsWith('/gallery/') || str.endsWith('/gallery-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(3) > a').addClass('active');
    } else if (str.endsWith('/posts/') || str.endsWith('/posts-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(4) > a').addClass('active');
    } else if (str.endsWith('/contacts/') || str.endsWith('/contacts-en/')) {
        $('nav.top-middle-menu > ul > li:nth-child(5) > a').addClass('active');
    }
    //when have posts to add highlight to the posts
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