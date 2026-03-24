document.addEventListener('DOMContentLoaded', () => {
    const cookieBoxBio = document.getElementById('cookie-box-bio');
    const btnAceitarBio = document.getElementById('btn-aceitar-bio');

    // Verifica a MESMA chave do site principal
    const cookieAceito = localStorage.getItem('ecozelo_cookies_consent');

    if (!cookieAceito) {
        setTimeout(() => {
            cookieBoxBio.classList.add('mostrar');
            cookieBoxBio.setAttribute('aria-hidden', 'false');
        }, 1000); // Aparece 1 segundo após carregar os links
    }

    btnAceitarBio.addEventListener('click', () => {
        localStorage.setItem('ecozelo_cookies_consent', 'todos');
        cookieBoxBio.classList.remove('mostrar');
        cookieBoxBio.setAttribute('aria-hidden', 'true');
    });
});