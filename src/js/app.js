import './components/header';



$(document).ready(function() {

  const shrinkHeader = 1;

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
  $(window).scroll(function() {
    const scroll = getCurrentScroll();
    if (scroll >= shrinkHeader) {
      $('.js-topline').addClass('topline-boxShadow');
    } else {
      $('.js-topline').removeClass('topline-boxShadow');
    }
  });

  $(function() {

    function scrollNav(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ($($(this).data('href')).offset().top + 5)
      }, 1000);
      return false;
    }
    $(document).on('click', '.anchorJS', scrollNav)

  })

})
