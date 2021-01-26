$(function() {

  $(document).on('click','.js-navbar-responsive', function(e) {
    e.preventDefault();
    const $this = $(this);
    $this.closest('.st-header').addClass('is-open');
    $('body').addClass('overflow-hidden');

  });

  $(document).on('click','.js-st-header-close', function(e) {
    e.preventDefault();
    const $this = $(this);
    $this.closest('.st-header').removeClass('is-open');
    $('body').removeClass('overflow-hidden');

  });

})
