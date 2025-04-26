    // offcanvas script from Bootstrap + added element to close menu on click in small viewport
    $('[data-toggle="offcanvas"], .navbar-nav li a:not(.dropdown-toggle').on('click', function () {
        $('.site-header').removeClass('header-scrolled');
        $('.offcanvas-collapse').toggleClass('open')
    })