(function () {
  document.addEventListener("DOMContentLoaded", function () {
    scrollDown();
    scrollUp();
    if (document.querySelector(".projects__grid")) {
      if (typeof mixitup !== "undefined") {
        filter();
      } else {
        console.warn("mixitup is not defined");
      }
    }
  });
  function filter() {
    var mixer = mixitup(".projects__grid");
  }
  function scrollDown() {
    const buttonDown = document.querySelector(".mouse-btn");
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
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    function mainSection() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        buttonUp.style.display = "block";
      } else {
        buttonUp.style.display = "none";
      }
    }
  }
})();
