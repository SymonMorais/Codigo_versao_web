// Seleciona os elementos do HTML
const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");

// Criando um <img> no JS para exibir imagens
const imagemMotivacional = document.createElement("img");
imagemMotivacional.style.width = "200px";  // Define o tamanho da imagem
imagemMotivacional.style.marginTop = "15px";
document.body.appendChild(imagemMotivacional); // Adiciona no final da página

// Listas de frases e imagens organizadas por humor
const conteudoPorHumor = {
  feliz: {
    frases: [
      "Continue espalhando essa energia positiva para todos!",
      "Aproveite cada momento de alegria!",
      "Sua felicidade pode inspirar outras pessoas."
    ],
    imagens: [
      "./Feliz-3-900x600.jpeg",
      "./felicidade.webp",
      "./happyoffice.jpg"
    ]
  },
  triste: {
    frases: [
      "Tudo bem não estar bem o tempo todo.",
      "Você não está sozinho, tudo vai melhorar.",
      "Seja gentil consigo mesmo hoje."
    ],
    imagens: [
      "https://i.imgur.com/U2ZtRzP.png",
      "https://i.imgur.com/oe7vYsx.png",
      "https://i.imgur.com/vjw6T1F.png"
    ]
  },
  ansioso: {
    frases: [
      "Respire fundo, um passo de cada vez.",
      "Acalme sua mente, você está fazendo o seu melhor.",
      "Foque no agora, o futuro se constrói aos poucos."
    ],
    imagens: [
      "https://media1.tenor.com/m/za9kSvmOdvMAAAAd/respire-inspire.gif",
      "https://media1.tenor.com/m/za9kSvmOdvMAAAAd/respire-inspire.gif",
      "https://media1.tenor.com/m/za9kSvmOdvMAAAAd/respire-inspire.gif"
    ]
  },
  motivado: {
    frases: [
      "Aproveite essa motivação para realizar algo importante!",
      "Você tem tudo o que precisa para vencer.",
      "Continue firme, seus esforços terão resultado."
    ],
    imagens: [
      "https://i.imgur.com/YGL49h3.png",
      "https://i.imgur.com/TQ9i7Cf.png",
      "https://i.imgur.com/NGM0jHd.png"
    ]
  },
  neutro: {
    frases: [
      "Cada dia é uma nova oportunidade.",
      "O equilíbrio também é essencial.",
      "Cuide de si mesmo, mesmo nos dias comuns."
    ],
    imagens: [
      "https://i.imgur.com/xMwbYtL.png",
      "https://i.imgur.com/cWRnY8m.png",
      "https://i.imgur.com/sJ9YFmF.png"
    ]
  }
};

// Variável global para armazenar o humor atual
let humorAtual = "neutro";

// ---- Registrar humor ----
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const humor = humorInput.value.trim().toLowerCase();
  humorRegistrado.textContent = "Hoje você se sente: " + humor;

  // Verifica se existe conteúdo para esse humor
  if (conteudoPorHumor[humor]) {
    humorAtual = humor;
  } else {
    humorAtual = "neutro";
  }

  localStorage.setItem("humor", humorAtual);
  humorInput.value = "";
});

// ---- Mostrar humor salvo ----
window.addEventListener("load", function() {
  const humorSalvo = localStorage.getItem("humor");
  if (humorSalvo) {
    humorAtual = humorSalvo;
    humorRegistrado.textContent = "Hoje você se sente: " + humorSalvo;
  }
});

// ---- Sortear mensagem e imagem ----
mensagemBtn.addEventListener("click", function() {
  const conteudo = conteudoPorHumor[humorAtual];

  // Sorteia frase
  const indiceFrase = Math.floor(Math.random() * conteudo.frases.length);
  mensagemMotivacional.textContent = conteudo.frases[indiceFrase];

  // Sorteia imagem
  const indiceImagem = Math.floor(Math.random() * conteudo.imagens.length);
  imagemMotivacional.src = conteudo.imagens[indiceImagem];
});
