// Filtro de imagens
const buttons = document.querySelectorAll('.filtro button');
const images = document.querySelectorAll('.imagens img');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        images.forEach(img => {
            if (filter === 'all' || img.classList.contains(filter)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});

// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();

    if (nome && email && mensagem) {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
