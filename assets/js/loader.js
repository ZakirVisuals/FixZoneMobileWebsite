// ================================================================
// LOADER.JS — page load mukammal hote hi spinner hata deta hai.
// ================================================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.classList.add('loaded');
    }
});
