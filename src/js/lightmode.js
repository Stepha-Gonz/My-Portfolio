(function () {
  document.addEventListener("DOMContentLoaded", function () {
    darkmode();
  });

  function darkmode() {
    const darkModeON = window.matchMedia("(prefers-color-scheme: dark)");

    // Revisamos el estado guardado en localStorage al cargar la página
    const savedLightMode = localStorage.getItem("lightMode");

    if (savedLightMode === "enabled") {
      // Si el modo claro está activado
      document.body.classList.add("light-mode");
      particles("#3600f8"); // Color de partículas para el modo claro
    } else {
      // Si no hay nada guardado, o si está en modo oscuro
      document.body.classList.remove("light-mode");
      particles("#ffffff"); // Color de partículas para el modo oscuro
    }

    // Cambiar el tema según la preferencia del sistema si no hay un estado guardado
    darkModeON.addEventListener("change", function () {
      if (darkModeON.matches) {
        document.body.classList.remove("light-mode"); // Cambiar a modo oscuro
        particles("#ffffff"); // Cambiar color de partículas al modo oscuro
      } else {
        document.body.classList.add("light-mode"); // Cambiar a modo claro
        particles("#3600f8"); // Cambiar color de partículas al modo claro
      }
    });

    // Seleccionar los botones para activar el modo claro/oscuro
    const lightModeButtons = document.querySelectorAll(".nav__lightmode--mobile, .nav__lightmode");

    lightModeButtons.forEach((button) => {
      button.addEventListener("click", changeLightMode);
    });

    function changeLightMode() {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        // Guardar en localStorage que el modo claro está activado
        localStorage.setItem("lightMode", "enabled");
        particles("#3600f8"); // Cambiar partículas al color del modo claro
      } else {
        // Si se desactiva el modo claro, guardamos que está en modo oscuro
        localStorage.setItem("lightMode", "disabled");
        particles("#ffffff"); // Cambiar partículas al color del modo oscuro
      }
    }
  }

  // Función para inicializar las partículas con un color dinámico
  function particles(color) {
    if (window.pJSDom && window.pJSDom.length > 0) {
      // Destruir partículas previas si existen
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 43,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: color, // Aquí pasamos el color dinámicamente
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: color, // También cambiamos el color de las líneas
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    });
  }
})();
