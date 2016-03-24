(function($) {

var loadNav = function() {
  $('nav[role="navigation"] h2').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).toggleClass('icon-menu icon-times');
    $('body').toggleClass('nav-open');
  });
};

loadNav();

})(jQuery);