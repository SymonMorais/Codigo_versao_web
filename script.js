// Seleciona os elementos do HTML
const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");

// Listas de frases motivacionais organizadas por humor
const frasesPorHumor = {
  feliz: [
    "Continue espalhando essa energia positiva!",
    "Aproveite cada momento de alegria!",
    "Sua felicidade pode inspirar outras pessoas."
  ],
  triste: [
    "Tudo bem não estar bem o tempo todo.",
    "Você não está sozinho, tudo vai melhorar.",
    "Seja gentil consigo mesmo hoje."
  ],
  ansioso: [
    "Respire fundo, um passo de cada vez.",
    "Acalme sua mente, você está fazendo o seu melhor.",
    "Foque no agora, o futuro se constrói aos poucos."
  ],
  motivado: [
    "Aproveite essa motivação para realizar algo importante!",
    "Você tem tudo o que precisa para vencer.",
    "Continue firme, seus esforços terão resultado."
  ],
  neutro: [
    "Cada dia é uma nova oportunidade.",
    "O equilíbrio também é essencial.",
    "Cuide de si mesmo, mesmo nos dias comuns."
  ]
};

// Variável global para armazenar o humor atual
let humorAtual = "neutro";

// ---- Registrar humor ----
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Pega o humor digitado e transforma em minúsculas
  const humor = humorInput.value.trim().toLowerCase();

  // Mostra na tela o humor registrado
  humorRegistrado.textContent = "Hoje você se sente: " + humor;

  // Verifica se o humor digitado existe na lista
  if (frasesPorHumor[humor]) {
    humorAtual = humor;
  } else {
    humorAtual = "neutro"; // Caso não exista, usa neutro
  }

  // Salva no Local Storage
  localStorage.setItem("humor", humorAtual);

  // Limpa o campo de entrada
  humorInput.value = "";
});

// ---- Mostrar humor salvo ao abrir a página ----
window.addEventListener("load", function() {
  const humorSalvo = localStorage.getItem("humor");
  if (humorSalvo) {
    humorAtual = humorSalvo;
    humorRegistrado.textContent = "Hoje você se sente: " + humorSalvo;
  }
});

// ---- Sortear mensagem motivacional relacionada ao humor ----
mensagemBtn.addEventListener("click", function() {
  const frases = frasesPorHumor[humorAtual];
  const indice = Math.floor(Math.random() * frases.length);
  mensagemMotivacional.textContent = frases[indice];
});
