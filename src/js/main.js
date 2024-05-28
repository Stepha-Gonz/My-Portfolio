document.addEventListener("DOMContentLoaded", function () {
  showEvents();
  darkMode();
});

function showEvents() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", navegacionResponsive);

  const closeMenu = document.querySelector(".nav__close");
  closeMenu.addEventListener("click", cierreMenu);
}

function navegacionResponsive() {
  const menuOptions = document.querySelector(".menu__hidden");
  menuOptions.classList.toggle("show");
}

function cierreMenu() {
  const menuClose2 = document.querySelector(".menu__hidden");
  menuClose2.classList.remove("show");
}

function darkMode() {
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

  const darkModeButtonON = document.querySelector(".dark-mode-button");
  darkModeButtonON.addEventListener("click", changeDarkMode);
}

function changeDarkMode() {
  document.body.classList.toggle("dark-mode");
}

//,Gallery

var mixer = mixitup(".projects__grid");
