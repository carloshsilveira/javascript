const estudantes = require('./estudantes.json');

function ordenar(lista, propriedade) {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1;
        if (a[propriedade] > b[propriedade]) return 1;
        return 0
    })
}

//console.log(ordenar(estudantes, 'nome'));
console.log(ordenar(estudantes, 'email'));
