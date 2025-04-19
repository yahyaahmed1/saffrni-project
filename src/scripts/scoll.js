var $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(function () {
  /*------------------------------------------------------
  adds active class to the nav element where the scroll position is currently at
  ------------------------------------------------------*/
  $(window).on('scroll', function () {
    //get current sroll position
    var scrollPosition = $(window).scrollTop();
    //get the position of the containers
    var services = $("#services").offset().top,
      tours = $("#tours").offset().top,
      contact = $("#contact").offset().top;
    var servicesNav = $("#services-nav"),
      toursNav = $("#tours-nav"),
      contactNav = $("#contact-nav");
    //if the scroll position is the same as the position of the container specified, add the "active" class to the corresponding nav element
    if (scrollPosition >= services) {
      servicesNav.siblings().removeClass("active");
      servicesNav.addClass("active");
      console.log(services);

    } else if (scrollPosition < services) {
      servicesNav.removeClass("active");
    }
    if (scrollPosition >= tours - 100) {
      toursNav.siblings().removeClass("active");
      toursNav.addClass("active");

    }
    if (scrollPosition >= contact - 200) {
      contactNav.siblings().removeClass("active");
      contactNav.addClass("active");
    }
  });
  /*--------------------------------------------------------
    //add active class to the clicked element
  --------------------------------------------------------*/
  $("a.nav-link").on('click', function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

});