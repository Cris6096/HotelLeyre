const headerMarkup = `
<header class="site-header position-relative min-vh-100 overflow-hidden">
  <img src="img/imagenPrincipal.jpg" class="w-100 h-100 object-fit-cover position-absolute top-0 start-0" alt="Fachada exterior del Hotel Leyre en Pamplona">
  <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

  <nav class="navbar position-absolute top-0 start-0 w-100 z-3">
    <div class="container d-flex justify-content-between align-items-center">
    <button class="btn text-white fs-3 border-0 d-lg-none p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral" aria-controls="menuLateral" aria-label="Abrir menú"><span class="material-symbols-outlined">notes</span></button>
      <div class="offcanvas offcanvas-start bg-dark text-white" tabindex="-1" id="menuLateral" aria-labelledby="menuLateralLabel" style="width: 280px; --bs-bg-opacity: 1;">
        <div class="offcanvas-header d-flex justify-content-between align-items-center pt-4 px-4">
          <div class="d-flex flex-column align-items-center">
            <span class="titulo text-white lh-1" style="font-family: Tangerine; font-style: italic; font-size: 2.5rem;">L</span>
            <span class="text-white small lh-1" style="letter-spacing: 2px; font-size: 0.6rem;">★★★</span>
          </div>
          <button type="button" class="btn-close btn-close-white fs-4 shadow-none" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column px-4 pb-4">
          <ul class="nav flex-column gap-3 fs-5 fw-bold mb-auto">
            <li class="nav-item"><a class="nav-link text-white p-0" href="index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="habitaciones.html">Habitaciones</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="index.html#faq">Servicio</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="index.html#enclave">Destino</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="index.html#disfruta">Galería</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="#contacto">Contacto</a></li>
            <li class="nav-item"><a class="nav-link text-white p-0" href="index.html#faq">FAQs</a></li>
          </ul>

          <div class="pt-4 border-top border-secondary">
            <a class="text-white text-decoration-underline d-block mb-3 fw-bold text-center" href="disponibles.html">Mis reservas</a>
            <a class="btn w-100 fw-bold py-2 text-white" href="disponibles.html" style="background-color: #141414; letter-spacing: 1px;">Reservar</a>
          </div>
        </div>
      </div>

      <a class="navbar-brand d-flex align-items-center gap-4 text-decoration-none mx-0" href="index.html">
        <div class="d-flex flex-column align-items-center">
          <span class="titulo text-white lh-1" style="font-family: Tangerine; font-style: italic; font-size: 2.5rem;">L</span>
          <span class="text-white small lh-1" style="letter-spacing: 2px; font-size: 0.6rem;">★★★</span>
        </div>
        <span class="text-white fw-bold" style="font-size: 1.5rem; font-family: 'Barlow', sans-serif;">Hotel leyre</span>
      </a>

      <ul class="navbar-nav flex-row gap-4 d-none d-lg-flex mx-lg-auto">
        <li class="nav-item"><a class="nav-link text-white" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="habitaciones.html">Habitaciones</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="#contacto">Contacto</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="index.html#faq">FAQs</a></li>
      </ul>

      <a class="texto-pequeno text-white text-decoration-none" href="tel:+34948228500">(+34) 948 22 85 00</a>
    </div>
  </nav>

  <form action="disponibles.html" method="get" class="position-absolute bottom-0 start-0 w-100 z-2 pb-3">
    <div class="container">
      <div class="row g-0 bg-white shadow overflow-hidden align-items-stretch">
        <div class="col-12 col-lg-6 d-flex flex-column border-end">
          <div class="p-2 border-bottom">
            <label for="entrada" class="form-label text-muted texto-pequeno mb-0 text-uppercase fw-bold">Entrada</label>
            <input type="date" class="form-control form-control-sm border-0 p-0 shadow-none" id="entrada" name="entrada" value="2026-10-28" required>
          </div>
          <div class="p-2">
            <label for="salida" class="form-label text-muted texto-pequeno mb-0 text-uppercase fw-bold">Salida</label>
            <input type="date" class="form-control form-control-sm border-0 p-0 shadow-none" id="salida" name="salida" value="2026-10-29" required>
          </div>
        </div>

        <div class="col-12 col-lg-4 d-flex flex-column border-end">
          <div class="p-2 border-bottom">
            <label for="ocupacion" class="form-label text-muted texto-pequeno mb-0 text-uppercase fw-bold">Ocupación</label>
            <select class="form-select form-select-sm border-0 p-0 shadow-none bg-transparent" id="ocupacion" name="ocupacion">
              <option selected>1 habitación, 2 adultos, 0 niños</option>
              <option>1 hab. 1 adulto</option>
              <option>1 hab. 2 adultos, 1 niño</option>
              <option>2 hab. 4 adultos</option>
            </select>
          </div>
          <div class="p-2">
            <label for="promo" class="form-label text-muted texto-pequeno mb-0 text-uppercase fw-bold">Promocode</label>
            <input type="text" class="form-control form-control-sm border-0 p-0 shadow-none text-uppercase" id="promo" name="promo" placeholder="PROMOCODE">
          </div>
        </div>

        <div class="col-12 col-lg-2 bg-leyre-oscuro d-grid p-0">
          <button type="submit" class="btn btn-leyre rounded-0 h-100 d-flex align-items-center justify-content-center py-4" style="background-color: #1f1f1f; border-color: #1f1f1f; letter-spacing: 2px; color: white;">RESERVAR</button>
        </div>
      </div>
    </div>
  </form>
</header>`;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  if (!header) {
    throw new Error('No se encontró el elemento "#header".');
  }
  header.outerHTML = headerMarkup;
});