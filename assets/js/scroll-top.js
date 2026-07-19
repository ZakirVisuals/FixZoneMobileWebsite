// ================================================================
// SCROLL-TOP.JS — sab pages pe "upar jayein" button banata hai
// aur uska show/hide + click behavior handle karta hai.
// ================================================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.classList.add('fab', 'scroll-top-btn');
scrollTopBtn.setAttribute('aria-label', 'Page ke upar jayein');
scrollTopBtn.innerHTML = '↑';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
