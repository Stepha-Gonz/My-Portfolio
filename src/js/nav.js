(function () {
  document.addEventListener("DOMContentLoaded", function () {
    startEvents();
  });

  function startEvents() {
    const selectMenu = document.querySelector(".nav__icon");
    selectMenu.addEventListener("click", mobileMenu);
    const closeIcon = document.querySelector(".nav__close");
    closeIcon.addEventListener("click", closeMenu);
    const selectLink = document.querySelectorAll(".nav__menu--link, .nav__menu--link-darkmode");
    selectLink.forEach((link) => link.addEventListener("click", closeMenu));

    function mobileMenu() {
      const openMenu = document.querySelector(".nav__menu");
      openMenu.classList.toggle("show");
    }
    function closeMenu() {
      const closeMenu = document.querySelector(".nav__menu");
      closeMenu.classList.remove("show");
    }
  }
})();
