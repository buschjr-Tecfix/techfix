const WHATSAPP_NUMBER = "5513996660267";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.getElementById("servico");
    const value = link.dataset.service;
    if (!select || !value) return;

    const option = Array.from(select.options).find(item => item.text === value);
    if (option) select.value = value;
  });
});

document.getElementById("quote-form")?.addEventListener("submit", event => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const servico = document.getElementById("servico").value;
  const local = document.getElementById("local").value.trim();
  const descricao = document.getElementById("descricao").value.trim();

  const mensagem = [
    "Olá! Vim pelo site da Techfix.",
    "",
    `Nome: ${nome}`,
    `Serviço: ${servico}`,
    `Bairro e cidade: ${local}`,
    `Descrição: ${descricao}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
