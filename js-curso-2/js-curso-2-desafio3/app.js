// desafio 1
function imc(peso, altura) {
    return peso/(altura*altura);
}

function converterDolar(dolar) {
    return dolar * 4.80;
}

function areaEPerimetro(largura, altura) {
    let area = largura * altura;
    let perimetro = largura*2 + altura*2;
    alert(`A área é: ${area} m² e o perimetro é: ${perimetro} m`);
}

function areaEPerimetroCircular(raio) { 
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    return `A área é: ${area.toFixed(0)} m² e o perimetro é: ${perimetro.toFixed(0)} m`;
}

function mostraTtabuada(numero) {
    for (let i=1; i<=10; i++) {
        let resultado = numero * i
        console.log(`${numero} * ${i} = ${resultado}`)
    }
}

//alert(imc(60, 1.7))
//alert(converterDolar(100))
//areaEPerimetro(10,10)
//alert(areaEPerimetroCircular(4))
//mostraTtabuada(9)