/* Skills */
/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

(function($) {
  jQuery(document).ready(function($) {
    //single progress bar

    $("#cirlc-1")
      .circleProgress({
        value: 0.9,
        size: 200,
        thickness: 2,
        fill: "#17a2b8"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(90 * progress) + "<i>%</i>");
      });

    //single progress bar

    $("#cirlc-2")
      .circleProgress({
        value: 0.8,
        size: 200,
        thickness: 2,
        fill: "#17a2b8"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(80 * progress) + "<i>%</i>");
      });

    //single progress bar

    $("#cirlc-3")
      .circleProgress({
        value: 0.7,
        size: 200,
        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(90 * progress) + "<i>%</i>");
      });

    //single progress bar

    $("#cirlc-4")
      .circleProgress({
        value: 0.7,
        size: 200,

        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(70 * progress) + "<i>%</i>");
      });
    $("#cirlc-5")
      .circleProgress({
        value: 0.7,
        size: 200,

        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(70 * progress) + "<i>%</i>");
      });
    $("#cirlc-6")
      .circleProgress({
        value: 0.85,
        size: 200,

        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(85 * progress) + "<i>%</i>");
      });
    $("#cirlc-7")
      .circleProgress({
        value: 0.75,
        size: 200,

        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(75 * progress) + "<i>%</i>");
      });
    $("#cirlc-8")
      .circleProgress({
        value: 0.85,
        size: 200,

        thickness: 2,
        fill: "#17a2b8",
        emptyFill: "#fff"
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find(".circle-inner")
          .html(Math.round(85 * progress) + "<i>%</i>");
      });
  });
})(jQuery);

/* End skills */
/* ..................................... */

/* About */
(function($) {
  /*  "use strict"; */
  /* owl carusel */
  $(".review-active").owlCarousel({
    loop: true,
    autoPlay: true,
    autoPlayTimeout: 9000,
    autoPlayHoverPause: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
})(jQuery);
/* End about */
/* ............................................ */
/* Navigation */

// fixed navbar
let nav_offset_top = $(".header_area").height() + 50;

function navbarFixed() {
  if ($(".header_area").length) {
    $(window).scroll(function() {
      let scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $(".header_area .main-menu").addClass("navbar_fixed");
      } else {
        $(".header_area .main-menu").removeClass("navbar_fixed");
      }
    });
  }
}

navbarFixed();
/* End fixed navbar */
/*scroll up or down the page to an anchor*/
$(document).ready(function() {
  $(".link-services").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top }, 2000);
  });
});

/* End navigation */

/* Services */
$(document).ready(function() {
  $(".service-animation").hover(
    function() {
      $(this).animate(
        {
          marginTop: "-=1%"
        },
        300
      );
    },
    function() {
      $(this).animate(
        {
          marginTop: "0%"
        },
        300
      );
    }
  );
});
/* End services */

/* FIXED BUTTON */

$(document).ready(function() {
  var back_to_top_button = [
    '<a href="#top" class="back-to-top"><i class="fas fa-arrow-circle-up"></i></a>'
  ].join("");
  $("body").append(back_to_top_button);

  $(".back-to-top").hide();

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn();
      } else {
        $(".back-to-top").fadeOut();
      }
    });

    $(".back-to-top").click(function() {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });
  });
});

/* Download CV */
$(document).ready(function() {
  $('a[href$=".pdf"]')
    .attr("download", "")
    .attr("target", "_blank");
});
/* End download CV */
