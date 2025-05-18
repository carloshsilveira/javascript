numMaximo = 3;

let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
exibirMensagemInicial();
document.querySelector('.container__input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verificarChute();
    }
});

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
    exibirTentativas();

    if (chute <= numMaximo && chute != '') {
        tentativas++;
        if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto com ' + tentativas + ' tentativa(s).');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('iniciar').setAttribute('disabled', true);

        } else {
            chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é Menor.') : exibirTextoNaTela('p', 'O número secreto é Maior.');
            limparCampo();
        }
    } else {
        exibirTextoNaTela('p', 'Digite um número menor que ' + numMaximo);
        limparCampo();
    }
} 


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numMaximo) {
        listaDeNumerosSorteados = [];
        alert('Os números já sorteados foram resetados. O Jogo irá reiniciar.')
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirTentativas() {
    let textoTentivas = document.getElementById('numeroDeTentativas');
    textoTentivas.innerHTML = `Tentativas: ${tentativas}`;
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTentativas();
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('iniciar').removeAttribute('disabled');
}

