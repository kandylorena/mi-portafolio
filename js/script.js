const modal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeModal = document.getElementById('closeModal');
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const sendText = document.getElementById('sendText');
const sendSpinner = document.getElementById('sendSpinner');
const formMessage = document.getElementById('formMessage');
const cvBtn = document.getElementById('cvBtn');
const cvMenu = document.getElementById('cvMenu');
const viewCv = document.getElementById('viewCv');
const downloadCv = document.getElementById('downloadCv');
const cvPdf = 'Curriculum Kandy Lorena Palomino.pdf';

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', closeContactModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeContactModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeContactModal();
  }
});

function closeContactModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  formMessage.classList.add('hidden');
}

cvBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  cvMenu.classList.toggle('show');
});

document.addEventListener('click', () => {
  cvMenu.classList.remove('show');
});

viewCv.addEventListener('click', (e) => {
  e.preventDefault();
  window.open(cvPdf, '_blank');
  cvMenu.classList.remove('show');
});

downloadCv.addEventListener('click', (e) => {
  e.preventDefault();
  const link = document.createElement('a');
  link.href = cvPdf;
  link.download = 'Curriculum_Kandy_Lorena_Palomino.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  cvMenu.classList.remove('show');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  formMessage.classList.add('hidden');
  sendText.textContent = 'Enviando...';
  sendSpinner.classList.remove('hidden');
  sendBtn.disabled = true;

  try {
    await emailjs.sendForm('service_9j5d2da', 'template_uy9lska', form);
    formMessage.textContent = 'Mensaje enviado con éxito';
    formMessage.className = 'text-sm text-center font-medium text-green-600';
    formMessage.classList.remove('hidden');
    form.reset();
    setTimeout(closeContactModal, 2500);
  } catch (err) {
    formMessage.textContent = 'Error al enviar. Intenta de nuevo.';
    formMessage.className = 'text-sm text-center font-medium text-red-600';
    formMessage.classList.remove('hidden');
  } finally {
    sendText.textContent = 'Enviar Mensaje';
    sendSpinner.classList.add('hidden');
    sendBtn.disabled = false;
  }
});
