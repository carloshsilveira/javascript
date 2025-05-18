function exibeOla() {
    console.log('Olá, Mundo!!!');
}

function exibeOlaNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobraNumero(numero) {
    dobro = numero * 2;
    console.log('O dobro é : '  + dobro);
    return dobro;
}

function mediaNumeros(num1, num2, num3) {
    media = (num1 + num2 + num3) / 3;
    console.log('A média é : ' + media);
    return media;
}

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        alert(num1 + ' é maior ');
    } else if (num1 < num2){
        alert(num2 + ' é maior ');
    } else {
        alert('Os números são iguais!')
    }
}

function elevadoADois(numero) {
    elevado = numero * numero;
    console.log('O dobro é : '  + elevado);
    return elevado;
}

exibeOla();
exibeOlaNome('Carlos');
dobraNumero(10);
mediaNumeros(10, 20 , 30);
//maiorNumero(10, 10);
elevadoADois(5);
