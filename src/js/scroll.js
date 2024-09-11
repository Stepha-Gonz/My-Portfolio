(function () {
  document.addEventListener("DOMContentLoaded", function () {
    scrollDown();
    scrollUp();
  });

  function scrollDown() {
    const buttonDown = document.querySelector(".scroll-down");
    if (buttonDown) {
      buttonDown.addEventListener("click", nextSection);

      function nextSection() {
        const sectionSelect = document.querySelector("#about");
        if (sectionSelect) {
          sectionSelect.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }

  function scrollUp() {
    const buttonUp = document.querySelector(".scroll-up");
    buttonUp.style.display = "none";

    window.onscroll = function () {
      mainSection();
    };

    buttonUp.addEventListener("click", function () {
      const homeElement = document.querySelector("#home");
      if (homeElement) {
        scrollToSection("#home");
      } else {
        scrollToSection("#headerproject");
      }
    });

    function mainSection() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonUp.style.display = "flex";
      } else {
        buttonUp.style.display = "none";
      }
    }

    function scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);

      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }
})();
