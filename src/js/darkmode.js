(function () {
  document.addEventListener("DOMContentLoaded", function () {
    darkmode();
  });

  function darkmode() {
    const darkModeON = window.matchMedia("prefers-color-scheme:dark");
    if (darkModeON.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    darkModeON.addEventListener("change", function () {
      if (darkModeON.matches) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
      }
    });
    const darkModeButtonON = document.querySelector(".nav__menu--link-darkmode");
    darkModeButtonON.addEventListener("click", changeDarkMode);

    function changeDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
  }
})();
