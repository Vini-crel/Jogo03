
const CONFIG = {

    intervaloGeracao: 1000,

    limiteElementos: 12

};



const sistema = {

    elementos: [],

    intervalo: null,

    geracaoAtiva: false

};



const cena = document.getElementById("cena");

const contador = document.getElementById("contador");

const btnIniciar = document.getElementById("btnIniciar");

const btnPausar = document.getElementById("btnPausar");

const btnLimpar = document.getElementById("btnLimpar");


btnIniciar.addEventListener(
    "click",
    iniciarGeracao
);

btnPausar.addEventListener(
    "click",
    pausarGeracao
);

btnLimpar.addEventListener(
    "click",
    limparCenario
);



function iniciarGeracao() {

    if (sistema.geracaoAtiva) {

        return;

    }

    sistema.geracaoAtiva = true;

    gerarElemento();

    sistema.intervalo = setInterval(
        gerarElemento,
        CONFIG.intervaloGeracao
    );

}



function pausarGeracao() {

    sistema.geracaoAtiva = false;

    clearInterval(
        sistema.intervalo
    );

    sistema.intervalo = null;

}



function gerarElemento() {

    if (
        sistema.elementos.length >=
        CONFIG.limiteElementos
    ) {

        pausarGeracao();

        return;

    }

    const arvore = criarArvore();

    posicionarElemento(arvore);

    cena.appendChild(arvore);

    sistema.elementos.push(arvore);

    atualizarContador();

}



function criarArvore() {

    const arvore =
        document.createElement("div");

    arvore.classList.add(
        "arvore",
        "objeto-cenario"
    );

    const escala =
        0.7 + Math.random() * 0.6;

    arvore.style.transform =
        `scale(${escala})`;

    return arvore;

}


function posicionarElemento(elemento) {

    const posicao =
        5 + Math.random() * 90;

    elemento.style.left =
        `${posicao}%`;

}




function atualizarContador() {

    contador.textContent =
        `Elementos: ${sistema.elementos.length}`;

}



function limparCenario() {

    pausarGeracao();

    sistema.elementos.forEach(
        function (elemento) {

            elemento.remove();

        }
    );

    sistema.elementos = [];

    atualizarContador();

}