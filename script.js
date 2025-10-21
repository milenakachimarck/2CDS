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

// Adicione ao seu 'script.js' dentro do DOMContentLoaded
const banner = document.getElementById('banner-principal');

// Crie uma lista com os caminhos das suas imagens
const imagensBanner = [
    "paragrafo_1_banner.jpg",
    "outra_imagem_1.jpg", // Substitua pelo nome do seu arquivo
    "outra_imagem_2.jpg"  // Substitua pelo nome do seu arquivo
];

let indiceAtual = 0;

if (banner) {
    function trocaBanner() {
        // Incrementa o índice, voltando para 0 se chegar ao final do array
        indiceAtual = (indiceAtual + 1) % imagensBanner.length;

        // Troca o atributo 'src' da imagem
        banner.src = imagensBanner[indiceAtual];
    }

    // Troca a imagem a cada 3000 milissegundos (3 segundos)
    setInterval(trocaBanner, 3000); 
}