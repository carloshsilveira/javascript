const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: [
        { nota: 4.5, comentario: "Ótima leitura!" },
        { nota: 6.8, comentario: "Muito legal"}
    ]
};

delete livro.genero;
livro.autor = 'Não temos essa informação';
livro['recomendamos'] = true;
livro.avaliacao.push({ nota: 8, comentario: "Ótimo"});


console.log(livro);
console.log('');
console.log(livro.avaliacao);
console.log('');
console.log(livro.avaliacao[0]);
console.log('');
console.log(livro.avaliacao[0].nota);
console.log('');
console.log(anoAtual);

const pioresAvaliacoes = livro.avaliacao.filter((avaliacoes) => avaliacoes.nota <= 5)
console.log(pioresAvaliacoes)