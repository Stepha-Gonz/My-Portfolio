(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const colors = ["#8ecae6", "#f07167", "#d4acd0", "#e3c37f"];
    const skillItems = document.querySelectorAll(".project__tools--skill");
    skillItems.forEach((item, index) => {
      const color = colors[index % colors.length];
      item.style.setProperty("--color", color);
    });
  });
})();
