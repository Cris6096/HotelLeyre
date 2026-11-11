const footerMarkup = `
<footer id="contacto" class="bg-leyre-oscuro py-5 text-white">
  <div class="container">
    <div class="row g-4 mb-5 align-items-start">
      <div class="col-12 col-md-4 d-flex flex-column align-items-start align-items-md-center justify-content-center">
        <span class="titulo text-white lh-1" style="font-family: Tangerine; font-style: italic; font-size: 2.5rem;">L</span>
        <span class="text-white small lh-1" style="letter-spacing: 2px; font-size: 0.6rem;">★★★</span>
      </div>

      <div class="col-6 col-md-4">
        <ul class="list-unstyled mb-0">
          <li class="mb-2"><a href="index.html" class="text-white text-decoration-none">Inicio</a></li>
          <li class="mb-2"><a href="habitaciones.html" class="text-white text-decoration-none">Habitaciones</a></li>
          <li class="mb-2"><a href="index.html#faq" class="text-white text-decoration-none">FAQs</a></li>
          <li class="mb-2"><a href="disponibles.html" class="text-white text-decoration-none">Mis Reservas</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-4">
        <p class="titulo mb-3 fw-bold">Contacto</p>
        <ul class="list-unstyled texto-pequeno mb-0">
          <li class="mb-3 d-flex align-items-start gap-2">
            <span class="material-symbols-outlined">call</span>
            <a href="tel:+34948228500" class="text-white text-decoration-none">(+34) 948 22 85 00</a>
          </li>
          <li class="mb-3 d-flex align-items-start gap-2">
            <span class="material-symbols-outlined">mail</span>
            <a href="mailto:reservas@hotel-leyre.com" class="text-white text-decoration-none">reservas@hotel-leyre.com</a>
          </li>
          <li class="mb-3 d-flex align-items-start gap-2">
            <span class="material-symbols-outlined">location_on</span>
            <a href="https://www.google.com/maps/search/?api=1&amp;query=C.+Leyre,+7,+31002+Pamplona" class="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">C. Leyre, 7, 31002 Pamplona, Navarra</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="ratio ratio-16x9 overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.245!2d-1.644!3d42.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50930777777777%3A0x0!2sC.+Leyre%2C+7,+31002+Pamplona,+Navarra!5e0!3m2!1ses!2ses!4v1234567890"
            style="border: 0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación del Hotel Leyre en Pamplona">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) {
    throw new Error('No se encontró el elemento "#footer".');
  }
  footer.outerHTML = footerMarkup;
});