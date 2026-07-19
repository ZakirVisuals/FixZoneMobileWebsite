// ================================================================
// MAIN.JS — poori site ka entry point. Filhaal iska kaam:
// current page ke nav link (navbar + sidebar dono mein) pe
// "active" class apne aap laga dena — taake har HTML file mein
// alag se class="active" manually na likhni pare.
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Ab links poore root-relative paths hain (jese "/pages/about.html"),
    // isliye poora pathname compare karte hain, sirf filename nahi.
    const currentPath = window.location.pathname;

    document.querySelectorAll('.navbar a, .sidebar a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Services aur Pricing page ke liye alag JS files nahi banayin
    // (fz.txt spec mein sirf 9 JS files thi) — isliye ye dono renderers
    // yahin main.js mein hain, aur SIRF tab chalte hain jab us page pe
    // required container element maujood ho.
    renderServices();
    renderPricing();

    // Dark/Light theme toggle button
    initThemeToggle();
    initBlogToggles ();
});

// ================================================================
// Theme toggle — button banata hai (bottom-left, glass style — CSS
// scroll-top.css mein .theme-toggle-btn), user ki pasand localStorage
// mein yaad rakhta hai taake agli visit pe wahi theme khule.
// ================================================================
function initThemeToggle() {
    const savedTheme = localStorage.getItem('fixzone-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.createElement('button');
    themeBtn.classList.add('fab', 'theme-toggle-btn');
    themeBtn.setAttribute('aria-label', 'Dark/Light mode badlein');
    themeBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('fixzone-theme', next);
        themeBtn.textContent = next === 'light' ? '🌙' : '☀️';
    });

}

function initBlogToggles() {
     document.querySelectorAll('.blog-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
     btn.closest('.card').classList.toggle('expanded');
       });
      });
}

// ================================================================
// Services grid — sirf services.html pe chalta hai (agar #servicesGrid
// element maujood ho)
// ================================================================
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    fetch('/data/services.json')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';

            data.forEach(category => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = category.category;
                card.appendChild(title);

                const ul = document.createElement('ul');
                category.services.forEach(service => {
                    const li = document.createElement('li');

                    const img = document.createElement('img');
                    img.src = service.image;
                    img.alt = service.name;
                    li.appendChild(img);

                    li.appendChild(document.createTextNode(service.name));
                    ul.appendChild(li);
                });

                card.appendChild(ul);
                container.appendChild(card);
            });
        })
        .catch(err => console.error('Error loading services:', err));
}

// ================================================================
// Pricing grid — sirf pricing.html pe chalta hai (agar #pricingGrid
// element maujood ho)
// ================================================================
function renderPricing() {
    const container = document.getElementById('pricingGrid');
    if (!container) return;

    fetch('/data/pricing.json')
        .then(res => res.json())
        .then(data => {
            container.innerHTML = '';

            data.forEach(category => {
                const card = document.createElement('div');
                card.classList.add('card');

                const title = document.createElement('h2');
                title.textContent = category.category;
                card.appendChild(title);

                const ul = document.createElement('ul');
                category.items.forEach(item => {
                    const li = document.createElement('li');

                    const name = document.createElement('span');
                    name.textContent = item.name;

                    const price = document.createElement('span');
                    price.classList.add('price');
                    price.textContent = item.price;

                    li.appendChild(name);
                    li.appendChild(price);
                    ul.appendChild(li);
                });

                card.appendChild(ul);
                container.appendChild(card);
            });
        })
        .catch(err => console.error('Error loading pricing:', err));

}
