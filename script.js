const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const dialog = document.getElementById('preview-dialog');
const previewImage = document.getElementById('preview-image');
const previewTitle = document.getElementById('preview-title');
const closePreview = document.getElementById('close-preview');

for (const button of document.querySelectorAll('[data-preview]')) {
  button.addEventListener('click', () => {
    if (!dialog || !previewImage || !previewTitle) return;
    const src = button.dataset.preview;
    const title = button.dataset.title || 'Visualização';
    previewImage.src = src;
    previewImage.alt = `Visualização ampliada: ${title}`;
    previewTitle.textContent = title;
    dialog.showModal();
  });
}

closePreview?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const copyButton = document.getElementById('copy-link');
const toast = document.getElementById('toast');
let toastTimer;

copyButton?.addEventListener('click', async () => {
  const link = copyButton.dataset.link;
  try {
    await navigator.clipboard.writeText(link);
    if (toast) {
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
    }
  } catch {
    window.prompt('Copie o link do kit:', link);
  }
});
