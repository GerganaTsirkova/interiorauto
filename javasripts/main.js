function startSite() {
    if ($(window).width() < 800) {
        $('.slide-menu').css('display', 'none');
        $('.btn-menu-open').css('display', 'block');
        $('.btn-menu-close').css('display', 'none');
    } else {
        $('.slide-menu').css('display', 'none');
        $('.btn-menu-open').css('display', 'none');
        $('.btn-menu-close').css('display', 'none');
    }
}

function openMobileMenu() {

    $('.slide-menu').css('display', 'block');
    $('.btn-menu-close').css('display', 'block');
    $('.btn-menu-open').css('display', 'none');
}

function closeMobileMenu() {
    $('.slide-menu').css('display', 'none');
    $('.btn-menu-close').css('display', 'none');
    $('.btn-menu-open').css('display', 'block');
}