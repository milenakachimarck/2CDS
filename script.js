document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('img');

  imagens.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'translateY(-10px)';
      img.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    img.addEventListener('mouseleave', () => {
      img.style.transform = 'translateY(0)';
      img.style.boxShadow = 'none';
    });
  });
});