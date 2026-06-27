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

// =============================================
// PARTICLE SYSTEM — puntos de luz animados
// =============================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = -1000;
let mouseY = -1000;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles(count) {
  particles = [];
  const colors = [
    'rgba(196, 181, 253,',  // violet-200
    'rgba(167, 139, 250,',  // violet-300
    'rgba(139, 92, 246,',   // violet-400
    'rgba(124, 58, 237,',   // violet-500
    'rgba(237, 233, 254,',  // violet-100
  ];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.15,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
      orbit: Math.random() * 30 + 10,
      orbitSpeed: (Math.random() - 0.5) * 0.008,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    const dx = mouseX - p.x;
    const dy = mouseY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    let pushX = 0, pushY = 0;
    if (dist < 120) {
      const force = (120 - dist) / 120 * 0.5;
      pushX = -dx / dist * force;
      pushY = -dy / dist * force;
    }

    p.x += p.speedX + pushX;
    p.y += p.speedY + pushY;
    p.phase += p.orbitSpeed;

    const waveX = Math.sin(p.phase) * 0.3;
    const waveY = Math.cos(p.phase * 0.7) * 0.3;
    p.x += waveX;
    p.y += waveY;

    if (p.x < -20) p.x = canvas.width + 20;
    if (p.x > canvas.width + 20) p.x = -20;
    if (p.y < -20) p.y = canvas.height + 20;
    if (p.y > canvas.height + 20) p.y = -20;

    const pulse = 0.6 + 0.4 * Math.sin(p.phase * 2);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `${p.color} ${p.opacity * pulse})`;
    ctx.fill();

    // glow sutil
    if (p.r > 3) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${p.opacity * 0.12 * pulse})`;
      ctx.fill();
    }
  }

  requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles(70);
});

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

resizeCanvas();
createParticles(70);
drawParticles();
