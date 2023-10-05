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

$(document).ready(function () {
  $(".navbar--dropdown-trigger").on("click", function () {
    if ($(window).width() >= 998) {
      // Ensure we're above 998px window width
      var siblingDropdownContent = $(this).siblings(
        ".navbar--dropdown-content"
      );

      if (siblingDropdownContent.height() === 0) {
        // Opening actions
        gsap.to(".navbar--dropdown-content", {
          height: "auto",
          ease: "power5.out",
        });
        gsap.to(siblingDropdownContent.find("a"), {
          opacity: 1,
          ease: "power5.out",
        });
        $(".menu--dropdown-content-bg").css("display", "block");
        gsap.to(".div-block-2", { height: "auto", ease: "power5.out" });
      } else {
        // Closing actions
        gsap.to(".navbar--dropdown-content", { height: 0, ease: "power5.out" });
        gsap.to(siblingDropdownContent.find("a"), {
          opacity: 0,
          ease: "power5.out",
        });
        gsap.to(".div-block-2", {
          height: 0,
          ease: "power5.out",
          onComplete: function () {
            $(".menu--dropdown-content-bg").css("display", "none");
          },
        });
      }
    }
  });
});
