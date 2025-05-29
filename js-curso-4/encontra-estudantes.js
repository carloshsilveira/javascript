const estudantes = require('./estudantes.json')

function encontrarAluno(lista, chave, valor) {
    return lista.find(estudante => estudante[chave].includes(valor));
}

//console.log(encontrarAluno(estudantes, 'telefone', '53927428873'));

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter(estudante => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

console.log(filtrarPorPropriedade(estudantes, 'cep'));

