let scale = 1;

// Hace que el botón de NO brinque a todos lados y se encoja
function dodgeAndShrink() {
  const noBtn = document.getElementById('no-btn');
  
  // Encoger
  scale -= 0.15;
  if (scale <= 0.1) {
    noBtn.style.display = 'none'; // Desaparece si es casi invisible
    return;
  }
  
  // Posiciones aleatorias en un rango de +-120px
  const randomX = (Math.random() - 0.5) * 240;
  const randomY = (Math.random() - 0.5) * 200;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;
}

// Abrir el Regalo
function openGift() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
}

// Cartita flotante (Modal) - Versión corregida
function openModal(title, text) {
  // Asegurarnos de que el texto no llegue vacío o indefinido
  const mensajeTitle = title || "Mensaje";
  const mensajeText = text || "noob";

  document.getElementById('modal-title').innerText = mensajeTitle;
  
  // Usamos modal-body (o modal-text si cambiaste el ID en HTML)
  const bodyElement = document.getElementById('modal-body') || document.getElementById('modal-text');
  if (bodyElement) {
    bodyElement.innerText = mensajeText;
  }

  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Canjear Cupones
function claimCoupon(couponId, message) {
  const coupon = document.getElementById(couponId);
  const btn = coupon.querySelector('.claim-btn');

  if (!coupon.classList.contains('claimed')) {
    coupon.classList.add('claimed');
    btn.innerText = "¡CANJEADO! ✅";
    
    // Disparar confeti chiquito para celebrar el canje
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 }
    });

    openModal("🎟️ ¡Cupón Canjeado!", message);
  }
}