// ==========================================
// MÓDULO DE NAVEGAÇÃO: BOTÃO VOLTAR (HÍBRIDO ECOZELO)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const origem = urlParams.get('origem');
    // Certifique-se de que o botão no HTML (privacidade.html e termos.html) tenha id="btn-voltar"
    const btnVoltar = document.getElementById('btn-voltar');

    // Rotas exclusivas do projeto Ecozelo
    const rotas = {
        'home': { link: '../index.html', nome: 'Site Oficial' },
        'bio': { link: '../bio/index.html', nome: 'Links Rápidos' },
        'privacidade': { link: '../legal/privacidade.html', nome: 'legal' },
        'termos': { link: '../legal/termos.html', nome: 'legal' },

    };

    // Ícone SVG padrão da Ecozelo
    const iconeVoltar = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`;
    if (btnVoltar) {
        if (origem && rotas[origem]) {
            // Adicionado o <span> em volta do texto
            btnVoltar.href = rotas[origem].link;
            btnVoltar.innerHTML = `${iconeVoltar} <span>Voltar para ${rotas[origem].nome}</span>`;
        } else {
            // Adicionado o <span> em volta do texto do fallback
            btnVoltar.addEventListener('click', (e) => {
                e.preventDefault();
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = 'index.html';
                }
            });
            // O fallback visual também recebe o span
            btnVoltar.innerHTML = `${iconeVoltar} <span>Voltar ao Site</span>`;
        }
    }
});