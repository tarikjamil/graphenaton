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
      // For all .navbar--dropdown-content
      gsap.to(".navbar--dropdown-content", { height: "auto" });

      // For sibling .navbar--dropdown-content of the clicked trigger
      var siblingDropdownContent = $(this).siblings(
        ".navbar--dropdown-content"
      );
      gsap.to(siblingDropdownContent.find("a"), { opacity: 1 });

      // For .menu--dropdown-content-bg
      $(".menu--dropdown-content-bg").css("display", "block"); // Alternatively, you can animate the opacity with GSAP from 0 to 1

      // For .div-block-2
      gsap.to(".div-block-2", { height: "auto" });
    }
  });
});
