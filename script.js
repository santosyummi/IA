const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Qual a relação entre o desenvolvimento da Fórmula 1 e os avanços tecnológicos que impactam ",
        alternativas: [
            {
                texto: "A Fórmula 1 impulsiona a pesquisa em aerodinâmica e materiais compostos, como a fibra de carbono.",
                afirmacao: "As aplicações desses avanços se estendem à aviação e à indústria automotiva de veículos de passeio."
               
            },
            {
                texto: "O alto investimento em sistemas de telemetria e análise de dados na Fórmula 1 é significativo.",
                afirmacao: "Esse investimento reflete-se na otimização de processos industriais e no desenvolvimento de softwares de gestão em diversas áreas."
            },
        ]
    },
    {
        enunciado: "Como o vôlei exemplifica a importância do trabalho em equipe e da comunicação para o sucesso coletivo?",
        alternativas: [
            {
                texto: "No vôlei, a coordenação entre levantador, atacantes e defensores é crucial para a construção de uma jogada eficiente.",
                afirmacao: "Isso demonstra como a colaboração individual contribui para o objetivo comum.
"
            },
            {
                texto: "A constante necessidade de comunicação verbal e não verbal entre os jogadores de vôlei é vital para antecipar movimentos e ajustar estratégias.",
                afirmacao: "Essa comunicação destaca a relevância da interação para a performance do time."
            },
        ]
    },
    {
        enunciado: "De que forma o basquete ilustra a necessidade de adaptabilidade tática e estratégica durante uma partida?",
        alternativas: [
            {
                texto: "A rapidez com que as equipes de basquete alternam entre ataque e defesa é notável.",
                afirmacao: "A rapidez com que as equipes de basquete alternam entre ataque e defesa é notável."
            },
            {
                texto: "A variação de jogadas ensaiadas e a improvisação de estratégias em resposta às ações do adversário é uma característica do basquete.",
                afirmacao: "Isso realça a capacidade dos atletas e treinadores em se adaptar a diferentes cenários de jogo."
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal =" "

function mostraPergunta(){
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    textoResultado.textContent = ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
} 

function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "conclusao...";
    textoResultado.textContent = "hitoriaFinal";
    caixaAlternativas.textContent = "";
}
mostraPergunta();