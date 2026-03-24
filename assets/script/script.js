// Seletores
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link, .btn-primary-nav');

const toggleMenu = () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');

    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
};

mobileMenuBtn.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});
// ==========================================
// AVISO DE COOKIES (LOCAL STORAGE)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.getElementById('cookie-box');
    const btnAceitar = document.getElementById('btn-aceitar-cookies');
    const btnRecusar = document.getElementById('btn-recusar-cookies');
    const cookieAceito = localStorage.getItem('ecozelo_cookies_consent');

    if (!cookieAceito) {
        setTimeout(() => {
            cookieBox.classList.add('mostrar');
            cookieBox.setAttribute('aria-hidden', 'false');
        }, 1500);
    }

    const fecharBannerCookies = (tipo) => {
        localStorage.setItem('ecozelo_cookies_consent', tipo);
        cookieBox.classList.remove('mostrar');
        cookieBox.setAttribute('aria-hidden', 'true');
    };

    btnAceitar.addEventListener('click', () => fecharBannerCookies('todos'));
    btnRecusar.addEventListener('click', () => fecharBannerCookies('essenciais'));
});