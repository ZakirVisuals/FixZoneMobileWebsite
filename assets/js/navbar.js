// ================================================================
// NAVBAR.JS — mobile hamburger tap karne se LEFT sidebar khulta hai.
// ================================================================

const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const sidebarClose = document.querySelector('.sidebar-close');

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    navToggle.classList.add('active');
    document.body.classList.add('no-scroll'); // sidebar khule to background scroll na ho
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

if (navToggle && sidebar) {
    navToggle.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar); // overlay pe tap karne se bhi band ho

    // sidebar ke andar kisi link pe click karte hi sidebar band ho jaye
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
}
