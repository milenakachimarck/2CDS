const imagem = document.querySelector('.imagem');

imagem.addEventListener('mouseenter', () => {
    imagem.style.transform = 'translateY(-10px)';
    imagem.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = 'translateY(0)';
    imagem.style.boxShadow = 'none';
});