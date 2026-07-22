(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const menuButton = $(".menu-toggle");
  const nav = $("#main-nav");
  const header = $(".site-header");
  const form = $("#quote-form");
  const serviceSelect = $("#servico");
  const modal = $("#certificate-modal");
  const modalImage = $("#certificate-image");
  const modalTitle = $("#certificate-title");
  let lastFocused = null;

  $("#year").textContent = new Date().getFullYear();

  const closeMenu = () => {
    nav?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Abrir menu");
  };

  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  $$("#main-nav a").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  $$('[data-service]').forEach(link => link.addEventListener("click", () => {
    if (serviceSelect) serviceSelect.value = link.dataset.service || "";
  }));

  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const nome = $("#nome").value.trim();
    const servico = serviceSelect.value;
    const local = $("#local").value.trim();
    const descricao = $("#descricao").value.trim();
    const message = `Olá, vim pelo site da Techfix.\n\nNome: ${nome}\nServiço: ${servico}\nLocal: ${local}\nNecessidade: ${descricao}`;
    window.open(`https://wa.me/5513996660267?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (modalImage) modalImage.src = "";
    lastFocused?.focus();
  };

  $$('[data-certificate]').forEach(button => button.addEventListener("click", () => {
    if (!modal || !modalImage || !modalTitle) return;
    lastFocused = button;
    modalImage.src = button.dataset.certificate;
    modalImage.alt = button.dataset.title || "Certificado";
    modalTitle.textContent = button.dataset.title || "Certificado";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    $(".modal-close", modal)?.focus();
  }));
  $$(".modal-close, .modal-backdrop", modal || document).forEach(button => button.addEventListener("click", closeModal));
  document.addEventListener("keydown", event => { if (event.key === "Escape") { closeMenu(); closeModal(); } });

  const revealItems = $$(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("visible"));
})();
