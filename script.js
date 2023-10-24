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

$("[popup=career]").on("click", function () {
  $(".popup-career--trigger").click();
});

$(".career--popup-bg").on("click", function () {
  $(".popup-career--trigger").click();
});

$(".career--button-close").on("click", function () {
  $(".popup-career--trigger").click();
});

// accordion --------------------- //
$(".navbar--dropdown-trigger").on("click", function () {
  if ($(window).width() < 998) {
    // Only execute for screens below 998px

    // Close other accordions when opening new one
    if (!$(this).hasClass("open")) {
      $(".navbar--dropdown-trigger.open").click();
    }

    // Save the sibling of the toggle we clicked on
    let sibling = $(this).siblings(".navbar--dropdown-content");
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

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".container--1089.is--relative");
    // settings
    let classSetting = attr(
      "after-hero-body",
      triggerEl.attr("tr-pagecolor-class")
    );
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to set the flag based on the language
  function setFlag(lang) {
    let flagSrc;
    switch (lang) {
      case "fr":
        flagSrc =
          "https://assets-global.website-files.com/651bab08c78416c9cdedd4cb/651da2ac8aa6ef83dab379e3_France.svg";
        break;
      case "en":
        flagSrc =
          "https://assets-global.website-files.com/651bab08c78416c9cdedd4cb/6537da94f09979ad55bda9b8_eng.png";
        break;
      default:
        break;
    }

    if (flagSrc) {
      document.querySelector(".lang--dropdown-trigger img.flag").src = flagSrc;
    }
  }

  // Initial setup to determine and set the flag of the current language
  let currentLang = Weglot.getCurrentLang();
  setFlag(currentLang);

  // Event listener for language switch
  document.querySelectorAll(".lang--switch").forEach(function (langSwitch) {
    langSwitch.addEventListener("click", function (event) {
      event.stopPropagation();

      let lang = this.getAttribute("data-lang");

      // Find the corresponding Weglot dropdown switch and click it
      let weglotSwitch = document.querySelector(
        `a[role="option"][id="weglot-language-${lang}"]`
      );
      if (weglotSwitch) {
        weglotSwitch.click();
      }
    });
  });
});

// accordion languages --------------------- //
$(".lang--dropdown-trigger").on("click", function (e) {
  // Prevent this click from being propagated to document
  e.stopPropagation();

  // Close other accordions when opening new one
  if (!$(this).hasClass("open")) {
    $(".lang--dropdown-trigger.open").click();
  }

  // Save the sibling of the toggle we clicked on
  let sibling = $(this).siblings(".lang--dropdown");
  let animationDuration = 200;

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
});

// Listen for clicks on the document
$(document).on("click", function (e) {
  // If a dropdown is open and the click is outside of a .lang--dropdown-trigger
  if (!$(e.target).closest(".lang--dropdown-trigger").length) {
    // Close any open dropdowns
    $(".lang--dropdown-trigger.open").click();
  }
});
