import scrollTopButton from "./boton_scroll.js";
import countdown from "./countdown.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_espia.js";
import slider from "./slider.js";
import draw from "./sorteo.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import contactFormValidations from "./validaciones_formulario.js";
import smartVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Sep 14,2023 17:00:00", "Feliz Cumpleaños 😎");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=mCdA4bJAGGk" target="_blank" rel=""noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mCdA4bJAGGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/AdgnvsjLPyvnVr7b9" target="_blank" rel=""noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.880338443741!2d-123.10739824999999!3d49.2786646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717b0ae3c5c3%3A0x44597c31137c8658!2sVancouver%2C%20Columbia%20Brit%C3%A1nica%20V6B%200B9%2C%20Canad%C3%A1!5e0!3m2!1ses!2sco!4v1675391076027!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
