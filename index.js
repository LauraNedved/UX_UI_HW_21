


$(document).ready(function () {
  // Highlight tabs on hover
  $("nav ul li a").hover(
    function () { // Mouse over
      $(this).parent().addClass("tab-highlight");
    },
    function () { // Mouse out
      $(this).parent().removeClass("tab-highlight");
    }
  );

 
});

$(document).ready(function () {
  // Target the <a> tags specifically in the footer
  $("footer ul li a").hover(
    function () { // Mouse over
      $(this).addClass("footer-link-highlight");
    },
    function () { // Mouse out
      $(this).removeClass("footer-link-highlight");
    }
  );
});

$(document).ready(function () {
  // Toggle highlight class on hover for each "View Case Study" button
  $("button").hover(
    function () { // Mouse enters the button area
      $(this).addClass("button-highlight");
    },
    function () { // Mouse leaves the button area
      $(this).removeClass("button-highlight");
    }
  );
});