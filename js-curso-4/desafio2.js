const pessoa1 = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"]
};

function mostrarInfoPessoa1(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome}. (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade}. (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro}. (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobies: ${pessoa.hobbies.join(", ")}. (Tipo: ${typeof pessoa.hobbies})`);

}

//mostrarInfoPessoa1(pessoa1);
// Problema 1 - Termina aqui

const pessoa2 = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"],
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade Feliz",
        estado: "Estado Alegre"
    }
};

function mostrarInfoPessoa2(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome}. (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade}. (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro}. (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobies: ${pessoa.hobbies.join(", ")}. (Tipo: ${typeof pessoa.hobbies})`);
    console.log(`Endereço:`);
    console.log(`Rua: ${pessoa.endereco.rua}, Cidade: ${pessoa.endereco.cidade}, Estado: ${pessoa.endereco.estado}. `);
    
}

//mostrarInfoPessoa2(pessoa2)
// Problema 2 - Termina aqui

const listaPessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Carlos", idade: 35, cidade: "Belo Horizonte" }
];

function mostrarListaPessoas(pessoas) {
    console.log('Lista de pessoas:');
    pessoas.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`));
}

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}

listaPessoas.push({ nome: "Henrique", idade: 15, cidade: "São Paulo" });
//mostrarListaPessoas(listaPessoas);
//console.log(filtrarPorCidade(listaPessoas, "São Paulo"));

// Problema 3 - Termina aqui


const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            console.log('Divisão por Zero não é permitida!');
        }
    },
    calcularMedia: function(array) {
        const somatorio = array.reduce((acumulador, variavel) => acumulador + variavel, 0)
        return somatorio/array.length
    }
}

//console.log(calculadora.multiplicacao(2,6));
//console.log(calculadora.calcularMedia([1,2,3,4,5]));

// // Problema 4 - Termina aqui


const contaBancaria = {
    titular: "Carlos",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        if (this.saldo >= valor){
            this.saldo -= valor;
        } else {
            console.log('Saldo menor que o valor requisitado.');
        }
    },
}

const cliente = {
    nome: "Carlos",
    conta: contaBancaria,
};

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`);
    console.log(`Saldo da conta: ${cliente.conta.saldo}`);
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);
cliente.conta.sacar(100);

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)