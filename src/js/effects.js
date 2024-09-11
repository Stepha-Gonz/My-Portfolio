(function () {
  document.addEventListener("DOMContentLoaded", function () {
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
})();
