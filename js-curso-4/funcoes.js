const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false;
    }
}

console.log(estudante.estaAprovado(7));

const cliente = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"]
};

cliente.animalEstimacao = [{
  nome: "Kripto",
  raca: "Cão",
  vacinado: true
}];

cliente.animalEstimacao.push({
  nome: "Lex",
  raca: "Gato",
  vacinado: false
})

console.log(cliente);
const animalEstimacao = cliente.animalEstimacao.filter(animal => animal.raca === "Cão"); 
console.log(animalEstimacao[0].nome);
