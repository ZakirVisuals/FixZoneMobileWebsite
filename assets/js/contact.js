// ================================================================
// CONTACT.JS — sirf Contact page ko chahiye. Web3Forms ko form
// background mein submit karta hai (page reload nahi hota).
// ================================================================

const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        });
        const result = await response.json();

        if (result.success) {
            contactSuccess.classList.add('show');
            contactForm.reset();
        } else {
            alert('Kuch masla ho gaya, dobara koshish karein ya WhatsApp par rabta karein.');
        }
    } catch (err) {
        console.error('Contact form error:', err);
        alert('Message send nahi ho saka, dobara koshish karein ya WhatsApp par rabta karein.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
