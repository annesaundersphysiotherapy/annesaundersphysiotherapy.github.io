(function($) {

var loadNav = function() {
  $('nav[role="navigation"] h2').on('click', 'a', function(e) {
    e.preventDefault();
    $('body').addClass('nav-open');
    $('nav[role="navigation"] div.nav-wrap').prepend('<a href="#" class="icon-times close-nav">Close Menu</a>');

    closeNav();
  });
};

var closeNav = function() {
  $('nav[role="navigation"]').on('click', 'a.close-nav', function(e) {
    e.preventDefault();
    $('body').removeClass('nav-open');
    $(this).remove();
  });
};

loadNav();

})(jQuery);