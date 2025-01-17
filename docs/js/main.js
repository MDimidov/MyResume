// Start JQuery
(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links
  $(".navbar-nav a, .large-btn a.btn, #about a.btn").on(
    "click",
    function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        $("html, body").animate(
          {
            scrollTop: $(this.hash).offset().top - 30,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".navbar-nav").length) {
          $(".navbar-nav .active").removeClass("active");
          $(this).closest("a").addClass("active");
        }
      }
    }
  );

  // Typed Initiate
  if ($(".header h2").length == 1) {
    var typed_strings = $(".header .typed-text").text();
    var typed = new Typed(".header h2", {
      strings: typed_strings.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }

  // Change Drop Down Button on Click
  $("button.btn.btn-sm.btn-outline-secondary").on("click", function () {
    let currentText = $(this).text();
    if ($(this).attr("aria-expanded") === "false") {
      $(this).html(
        currentText.replace("See", "Hide") +
          ' <i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
      );
    } else {
      $(this).html(
        currentText.replace("Hide", "See") +
          ' <i class="fa-solid fa-up-right-and-down-left-from-center"></i>'
      );
    }
  });

  // Skills
  $(".skills").waypoint(
    function () {
      $(".skills .progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Soft Skills
  $(".soft-skills").waypoint(
    function () {
      $(".soft-skills .progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Porfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // Review slider
  $(".review-slider").slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);


// Start JS
document.addEventListener("DOMContentLoaded", function () {
  // Nav menu show hide during mobile version

  let lastScrollTop = 0;
  const sidebar = document.querySelector(
    ".navbar.navbar-expand-md.bg-dark.navbar-dark"
  );

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && this.window.innerWidth <= 767.98) {
      // Hide navigation bar when you scroll down
      sidebar.style.top = "-70px"; // Hide it above the screen
    } else {
      // Show navigation bar when you scroll up
      sidebar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // No negative values
  });

  const navLinks = document.querySelectorAll(".nav-link");

  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 767.98) {
        navbarCollapse.classList.remove("show");
      }
    });
  });

  //Remove 3rd profile img
  if (window.matchMedia("(min-device-width: 992px)").matches) {
    let section = document.querySelector(".about .col-md-6.col-lg-7");
    section.classList.remove("col-lg-7");
    section.classList.add("col-lg-12");
    console.log(section);
  }
});
