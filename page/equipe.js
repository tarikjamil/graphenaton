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
    let sibling = $(this).siblings(".bio--accordion-response");
    let animationDuration = 500;

    if ($(this).hasClass("open")) {
      // Close the content div if already open
      sibling.animate({ height: "0px" }, animationDuration);
    } else {
      // Open the content div if already closed
      sibling.css("height", "auto");
      let autoHeight = sibling.height();
      sibling.css("height", "0px");
      sibling.animate({ height: autoHeight }, animationDuration, () => {
        sibling.css("height", "auto");
      });
    }

    // Open and close the toggle div
    $(this).toggleClass("open");
  } // end of the screen width check
});
