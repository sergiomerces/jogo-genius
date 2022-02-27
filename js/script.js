//script
let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() = 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    time = time * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, tempo - 250);
}

//verifica se os botões clicados são os mesmos da ordem aleatória gerada no game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] !== click[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//função para click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        elementColor(color);
        checkOrder();
    }, 250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color === 0) {
        return green;
    } else if(color === 1) {
        return red;
    } else if(color === 2) {
        return yellow;
    } else if(color === 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para gameOver
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert('Bem-vindo ao Gênesis! Iniciando um novo jogo!');
    score = 0;
    nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));