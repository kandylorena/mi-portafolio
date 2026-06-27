document.addEventListener('DOMContentLoaded', () => {

  // ==============================
  // CONTACT MODAL
  // ==============================
  const modal = document.getElementById('contactModal');
  const contactBtn = document.getElementById('contactBtn');
  const closeModal = document.getElementById('closeModal');
  const form = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const sendText = document.getElementById('sendText');
  const sendSpinner = document.getElementById('sendSpinner');
  const formMessage = document.getElementById('formMessage');

  function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModalFn() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    formMessage.classList.add('hidden');
  }

  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  closeModal.addEventListener('click', closeModalFn);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFn();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModalFn();
  });

  // ==============================
  // EMAILJS SEND (CORREGIDO)
  // ==============================
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMessage.classList.add('hidden');
    sendText.textContent = 'Enviando...';
    sendSpinner.classList.remove('hidden');
    sendBtn.disabled = true;

    try {
      // Usamos sendForm enviando e.target (el propio formulario) de manera nativa
      await emailjs.sendForm(
        'service_9j5d2da',
        'template_uy9lska',
        e.target
      );

      formMessage.className = 'text-sm text-center font-medium text-green-600';
      formMessage.textContent = 'Mensaje enviado con éxito. Gracias por contactarme.';
      formMessage.classList.remove('hidden');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      formMessage.className = 'text-sm text-center font-medium text-red-500';
      formMessage.textContent = 'Error al enviar. Intenta de nuevo o escríbeme directamente al email.';
      formMessage.classList.remove('hidden');
    } finally {
      sendText.textContent = 'Enviar Mensaje';
      sendSpinner.classList.add('hidden');
      sendBtn.disabled = false;
    }
  });

  // ==============================
  // CV DROPDOWN
  // ==============================
  const cvBtn = document.getElementById('cvBtn');
  const cvMenu = document.getElementById('cvMenu');

  cvBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cvMenu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    cvMenu.classList.remove('show');
  });

  cvMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    cvMenu.classList.remove('show');
  });

  document.getElementById('viewCv').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('cv.html', '_blank');
  });

  document.getElementById('downloadCv').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('cv.html?print=true', '_blank');
  });

  // ==============================
  // NAVBAR BACKGROUND ON SCROLL
  // ==============================
  const nav = document.querySelector('nav');
  const hero = document.querySelector('header');

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('shadow-sm', !entry.isIntersecting);
    },
    { threshold: 0.3 }
  );

  if (hero) observer.observe(hero);
});