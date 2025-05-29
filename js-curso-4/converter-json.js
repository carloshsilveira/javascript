const estudante = require('./estudante.json');

// Converter de Json para String
const stringEstudante = JSON.stringify(estudante)
console.log(stringEstudante);
console.log(typeof stringEstudante);

// Converter de String para Json
const obgStringEstudante = JSON.parse(stringEstudante);
console.log(obgStringEstudante);
console.log(typeof obgStringEstudante);

