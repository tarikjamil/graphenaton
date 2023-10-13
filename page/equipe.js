// Initialize the Splide.js slider
new Splide(".splide", {
  type: "slider",
  perPage: 3,
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: "15rem",
  breakpoints: {
    992: {
      perPage: 1,
    },
  },
}).mount();

// accordion --------------------- //
$(".bio--accordion-trigger").on("click", function () {
  if ($(window).width() < 998) {
    // Only execute for screens below 998px

    // Close other accordions when opening new one
    if (!$(this).hasClass("open")) {
      $(".bio--accordion-trigger.open").click();
    }

    // Save the sibling of the toggle we clicked on
    let sibling2 = $(this).siblings(".bio--accordion-response");
    let animationDuration2 = 500;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      sibling2.animate({ height: "0px" }, animationDuration2);
    } else {
      // Open the content div if already closed
      sibling2.css("height", "auto");
      let autoHeight2 = sibling2.height();
      sibling2.css("height", "0px");
      sibling2.animate({ height: autoHeight2 }, animationDuration2, () => {
        sibling2.css("height", "auto");
      });
    }

    // Open and close the toggle div
    $(this).toggleClass("open");
  } // end of the screen width check
});
