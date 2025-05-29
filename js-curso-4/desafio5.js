
// Problema 1
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(id) {
    
}


// Problema 2
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(lista, numId) {
    for (departamento of lista) {
        const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === numId);
        if (funcionarioEncontrado) {
            return funcionarioEncontrado;
        }
    }
    return 'Nenhum funcionario encontrado com esse ID: ' + numId;
}

console.log(encontrarFuncionarioPorId(departamentos, 202));
console.log(encontrarFuncionarioPorId(departamentos, 205));
