(function () {
  document.addEventListener("DOMContentLoaded", function () {
    showContact();
    emailContact();
  });

  function showContact() {
    const contactSelect = document.querySelector(".profileDiv");
    if (contactSelect) {
      contactSelect.addEventListener("click", moveContact);

      function moveContact() {
        const activeContact = document.querySelector(".cardContainer");
        activeContact.classList.toggle("active");
      }
    }
  }
  function emailContact() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
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
    }
  }
})();
