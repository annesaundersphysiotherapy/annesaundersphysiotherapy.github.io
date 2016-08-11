"use strict";

// Create global namespace to put stuff

var ASP = ASP || {};

// Initialiser

ASP.initialiser = {

  mobileNav: function() {
    $('nav[role="navigation"] h2').on('click','a',function(e) {
      e.preventDefault();
      $('body').toggleClass('nav-open');
      $(this).toggleClass('icon-menu icon-times');

      if($('body').hasClass('nav-open')) {
        var mobileNavAdditional = '<div class="additional-nav"></div>';
        $(mobileNavAdditional).appendTo('nav[role="navigation"]');
        $('footer[role="contentinfo"] ul.social').clone().appendTo('.additional-nav');
        setTimeout(function() {
          $('div.additional-nav').addClass('show');
        }, 50);
      } else {
        $('div.additional-nav').removeClass('show');
        setTimeout(function() {
          $('div.additional-nav').remove();
        }, 500);
      }
    });
  },

  mobileHeader: function() {
    var headerLogo = $('header[role="banner"] div.logo'),
        headerContact = $('header[role="banner"] div.contact'),
        headerContactHeight = $(headerContact).outerHeight();
        
    if($(headerContact).css('position') != 'fixed') {
      $(headerLogo).css('padding-top','0');
    } else {
      $(headerLogo).css('padding-top',headerContactHeight);
    }
  },

  removeIndexes: function() {
    $('a').each(function() {
      var href = $(this).attr('href').replace('index.html','');
      $(this).attr('href',href);
    });
  },

  getYear: function() {
    var year = new Date().getFullYear();
    $('span.year').each(function() {
      $(this).text(year);
    });
  },
};

// Resize

ASP.dom = {
  resizeUpdate: function() {},
};

// Call functions

$(document).ready(function () {
  var aspi = ASP.initialiser;

  aspi.mobileNav();
  aspi.mobileHeader();
  aspi.removeIndexes();
  aspi.getYear();
});

$(window).resize(function() {
  var dom = ASP.dom,
      aspi = ASP.initialiser;

  aspi.mobileHeader();

  dom.resizeUpdate();
});