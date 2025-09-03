let perguntas = [
  {
    pergunta: "Onde você encontra mais áreas verdes?",
    alternativas: ["No campo", "Na cidade", "Em shoppings", "Nas escolas"],
    respostaCorreta: 0 // Resposta correta é o campo
  },
  {
    pergunta: "Qual é um dos maiores desafios de viver na cidade?",
    alternativas: ["Falta de transporte público", "Trânsito e poluição", "Falta de comida", "Beleza natural"],
    respostaCorreta: 1 // Resposta correta é trânsito e poluição
  },
  {
    pergunta: "Onde é mais fácil ter contato com a natureza?",
    alternativas: ["No campo", "Na cidade", "Nos parques urbanos", "Nas ruas movimentadas"],
    respostaCorreta: 0 // Resposta correta é o campo
  },
  {
    pergunta: "Onde geralmente encontramos mais prédios e construções?",
    alternativas: ["No campo", "Na cidade", "No mar", "Nas florestas"],
    respostaCorreta: 1 // Resposta correta é na cidade
  },
  {
    pergunta: "Qual é a principal vantagem de viver no campo?",
    alternativas: ["Mais transporte público", "Mais natureza e tranquilidade", "Mais opções de emprego", "Mais shoppings"],
    respostaCorreta: 1 // Resposta correta é mais natureza e tranquilidade
  },
  {
    pergunta: "Onde as ruas são mais movimentadas?",
    alternativas: ["No campo", "Na cidade", "Em aldeias", "Em praças isoladas"],
    respostaCorreta: 1 // Resposta correta é na cidade
  },
  {
    pergunta: "Qual é a principal fonte de poluição nas cidades?",
    alternativas: ["Lixo no campo", "Veículos e indústria", "Arvores secas", "Sistemas agrícolas"],
    respostaCorreta: 1 // Resposta correta é veículos e indústria
  },
  {
    pergunta: "Qual ambiente oferece mais opções de lazer urbano?",
    alternativas: ["No campo", "Na cidade", "No interior", "Na praia"],
    respostaCorreta: 1 // Resposta correta é na cidade
  },
  {
    pergunta: "Qual é uma vantagem do campo sobre a cidade?",
    alternativas: ["Custo de vida mais alto", "Menos contato com a natureza", "Silêncio e qualidade do ar", "Mais agitação e movimento"],
    respostaCorreta: 2 // Resposta correta é silêncio e qualidade do ar
  },
  {
    pergunta: "Onde você pode ter uma vida mais tranquila e relaxante?",
    alternativas: ["Na cidade", "No campo", "Nos centros comerciais", "Nos parques de diversões"],
    respostaCorreta: 1 // Resposta correta é no campo
  }
];

let perguntaIndex = 0;
let pontuacao = 0;
let respostaSelecionada = -1;

function setup() {
  createCanvas(600, 400);
  textSize(18);
  textAlign(LEFT);
  noLoop();
  exibirPergunta();
}

function draw() {
  background(255);
  
  // Exibe a pergunta
  fill(0);
  text(perguntas[perguntaIndex].pergunta, 50, 50);
  
  // Exibe as alternativas
  for (let i = 0; i < perguntas[perguntaIndex].alternativas.length; i++) {
    fill(0);
    rect(50, 100 + i * 40, width - 100, 40, 10); // Fundo dos botões
    fill(255);
    text(`${i + 1}. ${perguntas[perguntaIndex].alternativas[i]}`, 60, 130 + i * 40); // Texto das alternativas
  }
  
  // Exibe a pontuação
  fill(0);
  text(`Pontuação: ${pontuacao}`, 450, 50);
  
  // Se o quiz terminou, mostra o resultado final
  if (perguntaIndex >= perguntas.length) {
    textSize(24);
    fill(0);
    textAlign(CENTER);
    text(`Quiz Terminado! Sua pontuação final é: ${pontuacao}`, width / 2, height / 2);
  }
}

function mousePressed() {
  if (perguntaIndex < perguntas.length) {
    // Verifica qual alternativa foi clicada
    let yInicial = 100;
    for (let i = 0; i < perguntas[perguntaIndex].alternativas.length; i++) {
      let yFinal = yInicial + 40;
      if (mouseY >= yInicial && mouseY <= yFinal && mouseX >= 50 && mouseX <= width - 50) {
        respostaSelecionada = i;
        verificarResposta();
        return;
      }
      yInicial += 40;
    }
  }
}

function verificarResposta() {
  // Verifica se a resposta selecionada está correta
  if (respostaSelecionada === perguntas[perguntaIndex].respostaCorreta) {
    pontuacao++;
  }
  
  // Passa para a próxima pergunta ou encerra o quiz
  perguntaIndex++;
  
  if (perguntaIndex < perguntas.length) {
    setTimeout(exibirPergunta, 500);  // Exibe a próxima pergunta após 0.5 segundos
  } else {
    loop();  // Inicia o loop novamente para exibir o resultado final
  }
}

function exibirPergunta() {
  redraw();
}

