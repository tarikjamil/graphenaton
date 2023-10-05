gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });
  tl.from("[animation=loading]", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
  });
}
pageLoad();

$(".navbar--dropdown-trigger").on("click", function () {
  var dropdown = $(this).closest(".navbar--dropdown");
  var bg = $(".menu--dropdown-content-bg");

  if (dropdown.hasClass("is--active")) {
    // Animate height to 0
    gsap.to(dropdown, {
      height: 0,
      onComplete: function () {
        dropdown.removeClass("is--active");
      },
    });
    bg.removeClass("is--active"); // You can also animate this with GSAP if needed
  } else {
    // Animate height to its "auto" value
    gsap.set(dropdown, { height: "auto" });
    gsap.from(dropdown, {
      height: 0,
      onComplete: function () {
        dropdown.addClass("is--active");
      },
    });
    bg.addClass("is--active"); // Again, animate with GSAP if necessary
  }
});
