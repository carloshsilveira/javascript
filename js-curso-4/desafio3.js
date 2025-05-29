const pessoa = {
  nome: 'Maria',
  notas: [8, 10, 10, 10], // lista de notas
  calcularMediaNotas: function() {
    somatorioNotas = this.notas.reduce((acumulador, nota) => acumulador += nota, 0);
    return somatorioNotas / this.notas.length;
  },
  classificarDesempenho: function() {
    const media = this.calcularMediaNotas()
    if (media >= 9) {
        return 'Desempelho excelente';
    } else if (media >= 7.5) {
        return 'Bom desempenho';
    } else if (media >= 6) {
        return 'Desempelho regular';
    } else {
        return 'Desempelho insuficiente';
    }
  }
}

//console.log(pessoa.calcularMediaNotas());
//console.log(pessoa.classificarDesempenho());
// Problema 1 Termina aqui


const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

// Adicione mais propriedades ao objeto carro
/*
carro.cambio = "Automático";
carro.kmRodados = 5000;

for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`)
}
*/

// Problema 2 Termina aqui


const carro2 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    ligado: true, 

    ligar: function () {
        if (this.ligado) {
            return 'O carro já está ligado';
        } else {
            this.ligado = false;
            return 'O carro foi ligado.';
        }
    },

    desligar: function() {
        if (this.ligado) {
            this.ligado = false;
            return 'O carro foi desligado.';
        } else {
            return 'O carro já está desligado.'
        }
    },

    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
  }
      
}

/*
console.log(carro2.ligar());
console.log(carro2.desligar());
console.log(carro2.obterDetalhes());
*/

// Problema 3 Termina aqui


const carro3 = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata",
    ligado: false 
};

const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};

const carroComNovosDetalhes = {...carro3, ...carroNovo}
carroComNovosDetalhes.modelo = "Accord";
console.log(carroComNovosDetalhes);


// Problema 5 Termina aqui
