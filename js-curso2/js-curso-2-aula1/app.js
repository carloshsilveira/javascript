numMaximo = 150;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numMaximo);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute <= numMaximo) {
        if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto com ' + tentativas + ' tentativa(s).');
        document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é Menor.') : exibirTextoNaTela('p', 'O número secreto é Maior.');
            tentativas++;
            limparCampo();
        }
    } else {
        exibirTextoNaTela('p', 'Digite um número menor que ' + numMaximo);
        limparCampo();
    }
} 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * numMaximo + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = 15;
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

