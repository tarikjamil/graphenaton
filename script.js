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
      var siblingDropdownContent = $(this).siblings(
        ".navbar--dropdown-content"
      );

      // Reset all other dropdown triggers and contents
      $(".navbar--dropdown-content a")
        .not(siblingDropdownContent.find("a"))
        .css("opacity", 0.5);
      $(".navbar--dropdown-activestate")
        .not($(this).find(".navbar--dropdown-activestate"))
        .css("opacity", 0);

      var tl = gsap.timeline(); // Define a new timeline

      if (siblingDropdownContent.height() === 0) {
        // Opening actions
        tl.to(".navbar--dropdown-content", {
          height: "auto",
          duration: 0.2,
          ease: "power5.out",
        })
          .to(
            siblingDropdownContent.find("a"),
            {
              opacity: 1,
              duration: 0.2,
              ease: "power5.out",
            },
            0
          ) // Start this animation at the same time as the first one (offset 0)
          .to(
            ".div-block-2",
            {
              height: "auto",
              duration: 0.2,
              ease: "power5.out",
            },
            0
          ); // Start this animation at the same time as the first one (offset 0)

        $(this).find(".navbar--dropdown-activestate").css("opacity", 1);
        $(".menu--dropdown-content-bg").css("display", "block");
        $(".menu--bg-close").css("display", "block"); // Display the .menu--bg-close
      } else {
        // Closing actions
        tl.to(".navbar--dropdown-content", {
          height: 0,
          duration: 0.1,
          ease: "power5.out",
        })
          .to(
            siblingDropdownContent.find("a"),
            {
              opacity: 0.5,
              duration: 0.2,
              ease: "power5.out",
            },
            0
          ) // Start this animation at the same time as the first one (offset 0)
          .to(
            ".div-block-2",
            {
              height: 0,
              duration: 0.3,
              ease: "power5.out",
              onComplete: function () {
                $(".menu--dropdown-content-bg").css("display", "none");
                $(".menu--bg-close").css("display", "none"); // Hide the .menu--bg-close
              },
            },
            0
          ) // Start this animation at the same time as the first one (offset 0)
          .to(
            $(this).find(".navbar--dropdown-activestate"),
            {
              opacity: 0,
              duration: 0.2,
              ease: "power5.out",
            },
            0
          ); // This animation will run at the same time as the previous animations
      }
    }
  });
});

$(".menu--bg-close").on("click", function () {
  $(".navbar--dropdown-trigger").click();
});

$("[popup=contact]").on("click", function () {
  $(".popup--trigger").click();
});

$(".contact--popup-bg").on("click", function () {
  $(".popup--trigger").click();
});

$(".contact--button-close").on("click", function () {
  $(".popup--trigger").click();
});
