const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a sua maior motivação na cozinha?",
        alternativas: [
            {
                texto: "Aperfeiçoar técnicas e seguir receitas à risca.",
                afirmacao: "Você é um chef técnico e detalhista."
            },
            {
                texto: "Experimentar novos sabores e criar receitas inovadoras.",
                afirmacao: "Você é um chef criativo e aventureiro."
            }
        ]
    },
    {
        enunciado: "Um ingrediente principal está faltando. O que você faz?",
        alternativas: [
            {
                texto: "Adapta a receita com o que tem à mão.",
                afirmacao: "Sua flexibilidade e improviso te salvam em qualquer situação."
            },
            {
                texto: "Corre para o mercado para comprar o ingrediente certo.",
                afirmacao: "Você preza pela perfeição e não abre mão da qualidade."
            }
        ]
    },
    {
        enunciado: "Qual sua especialidade culinária?",
        alternativas: [
            {
                texto: "Pratos clássicos e reconfortantes.",
                afirmacao: "Você valoriza a tradição e os sabores que aquecem a alma."
            },
            {
                texto: "Culinária exótica e fusões culturais.",
                afirmacao: "Sua paixão é explorar o mundo através dos sabores."
            }
        ]
    },
    {
        enunciado: "Como você lida com a pressão durante o preparo de um banquete?",
        alternativas: [
            {
                texto: "Comanda a equipe com precisão e organiza cada etapa.",
                afirmacao: "Sua liderança e organização garantem o sucesso."
            },
            {
                texto: "Entra em um estado de 'fluxo', focado totalmente na comida.",
                afirmacao: "Você se expressa totalmente através da arte de cozinhar."
            }
        ]
    },
    {
        enunciado: "Após uma refeição, qual a sua maior satisfação?",
        alternativas: [
            {
                texto: "Ver a alegria e a satisfação no rosto de quem comeu.",
                afirmacao: "Você cozinha para trazer felicidade aos outros."
            },
            {
                texto: "Receber elogios sobre o seu talento e habilidades.",
                afirmacao: "Seu desejo de ser o melhor chef te impulsiona."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada culinária foi um sucesso!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();