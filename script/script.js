$(document).ready(function() {

    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 500,
        easing: 'ease',
        offset: 0
    });

    (function () {
        window.onload = function () {
            var map,
                point = {lat: 47.8160622, lng: 35.170142};

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: point,
                    zoom: 17
                });
                var marker = new google.maps.Marker({
                    position: point,
                    map: map,
                    icon: 'assets/img/marker.png'
                });
            }

            initMap();
        };
    })();


    $('.scroll-button').on('click', function(){
        $('html,body').animate({
            scrollTop: 0}, 800);
    });

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.scroll-button').fadeIn();
        } else {
            $('.scroll-button').fadeOut();
        }
    })


});