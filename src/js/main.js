document.addEventListener("DOMContentLoaded", function () {
  showEvents();
  darkMode();
});

function showEvents() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", navegacionResponsive);

  const closeMenu = document.querySelector(".nav__close");
  closeMenu.addEventListener("click", cierreMenu);

  const closeLinks = document.querySelectorAll(".nav__link");
  closeLinks.forEach((link) => {
    link.addEventListener("click", cierreMenu);
  });
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

//,EMAIL

const contactForm = document.getElementById("contact-form");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("service_rwa9r29", "template_1jvwq0a", "#contact-form", "kdSuNW2tviCll_Lq9")
    .then(
      () => {
        Swal.fire({
          title: "Email Sent!",
          text: "We will reply to you as soon as possible.",
          icon: "success",
          timer: 6000,
        });
        contactForm.reset();
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, please try again",
          timer: 6000,
        });
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
