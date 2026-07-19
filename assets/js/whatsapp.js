// ================================================================
// WHATSAPP.JS — sab pages pe floating WhatsApp button banata hai
// (bottom-right, glassmorphism style).
// ================================================================

const whatsappNumber = '923153541214'; // confirmed final number
const whatsappMessage = 'Hello FixZone, I need repair service';

const whatsappBtn = document.createElement('a');
whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
whatsappBtn.target = '_blank';
whatsappBtn.classList.add('fab', 'whatsapp-btn');
whatsappBtn.setAttribute('aria-label', 'WhatsApp par baat karein');
whatsappBtn.innerHTML = '💬';
document.body.appendChild(whatsappBtn);
