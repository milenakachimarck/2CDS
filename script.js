
function mostrarMensagem() {
  alert("Olá! Seja bem-vindo(a) ao site Nossa escola");
}

function calcularMedia() {
  const nota1 = parseFloat(prompt("Digite a primeira nota:"));
  const nota2 = parseFloat(prompt("Digite a segunda nota:"));
  
  if (isNaN(nota1) || isNaN(nota2)) {
    alert("Por favor, digite apenas números!");
    return;
  }

  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    alert(`Aprovado! Sua média foi ${media}`);
  } else {
    if (media <= 7) {
    alert(`Reprovado! Sua média foi ${media}`);
  }
}

