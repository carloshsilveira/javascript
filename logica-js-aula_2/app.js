// alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;

let chute;

let tentativas = 0;

while (chute != numeroSecreto) {
    tentativas++;
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Descobriu o número secreto ${numeroSecreto}. Você fez ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}
