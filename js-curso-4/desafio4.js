// utilizarRequire.js
const dados = require('./dados.json');

/*
console.log("Conteúdo importado de dados.json:");
console.log(dados);
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);
*/

// Problema 1 termina aqui



const dados2 = require('./dados.json');
stringDados = JSON.stringify(dados2);
//console.log(stringDados);

// Problema 3 termina aqui

dados3 = require('./animais.json');
console.log(dados3);
console.log(typeof dados3);

const novoAnimal = {
    "id": 4,
    "nome": "Elefante",
    "tipo": "Mamífero",
    "habitat": "Savana"
};

dados3.animais.push(novoAnimal);
console.log(dados3);

dados3.animais[0].habitat = 'jsklfdlsjdkf';
console.log(dados3);

delete dados3.animais[3];
console.log(dados3);

stringDados3 = JSON.stringify(dados3)
console.log(stringDados3);
