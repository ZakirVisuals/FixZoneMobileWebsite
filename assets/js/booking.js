// ================================================================
// BOOKING.JS — sirf Booking page ko chahiye. Web3Forms ko form
// background mein submit karta hai (page reload nahi hota).
// ================================================================

const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Booking...';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
        });
        const result = await response.json();

        if (result.success) {
            bookingSuccess.classList.add('show');
            bookingForm.reset();
        } else {
            alert('Kuch masla ho gaya, dobara koshish karein ya WhatsApp par rabta karein.');
        }
    } catch (err) {
        console.error('Booking form error:', err);
        alert('Booking send nahi ho saki, dobara koshish karein ya WhatsApp par rabta karein.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Book Appointment';
    }
});
