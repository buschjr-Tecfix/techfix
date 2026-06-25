
const certificateModal = document.getElementById("certificate-modal");
const certificateImage = document.getElementById("certificate-image");
const certificateTitle = document.getElementById("certificate-title");
const closeButtons = certificateModal?.querySelectorAll(".modal-close, .modal-backdrop");

function closeCertificateModal() {
  if (!certificateModal) return;
  certificateModal.classList.remove("open");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (certificateImage) certificateImage.src = "";
}

document.querySelectorAll("[data-certificate]").forEach(button => {
  button.addEventListener("click", () => {
    if (!certificateModal || !certificateImage || !certificateTitle) return;
    const src = button.dataset.certificate;
    const title = button.dataset.title || "Certificado";
    certificateImage.src = src;
    certificateImage.alt = title;
    certificateTitle.textContent = title;
    certificateModal.classList.add("open");
    certificateModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    certificateModal.querySelector(".modal-close")?.focus();
  });
});

closeButtons?.forEach(button => button.addEventListener("click", closeCertificateModal));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCertificateModal();
});
