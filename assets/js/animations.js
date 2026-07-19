// ================================================================
// ANIMATIONS.JS — jin elements pe class="reveal" hai, wo scroll
// karte waqt fade + slide-in ho jate hain (CSS animations.css mein hai).
// ================================================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();
}

document.addEventListener('DOMContentLoaded', initScrollReveal);
