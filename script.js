document.addEventListener('DOMContentLoaded', () => {
    const botaoTema = document.getElementById("tema");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            
            if (document.body.classList.contains("dark")) {
                botaoTema.textContent = '☀️ Modo claro';
            } else {
                botaoTema.textContent = '🌙 Modo escuro';
            }
        });
    }
   
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

window.onload = function() {
    alert("Bem-vindo(a) ao site da Nossa Escola!");
};