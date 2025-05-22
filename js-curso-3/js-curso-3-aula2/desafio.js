function concArrays(array1, array2) {
    return array1.concat(array2);
}

console.log('Desafio 01: ');
console.log(concArrays([1,2,3], [4,5,6]));


console.log('\nDesafio 02: ');
arrayD2 = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayD2.slice(3,10));


console.log('\nDesafio 03: ');
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
console.log(frutas);
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas)


console.log('\nDesafio 04: ');
const menuPrincipal = ['lasanha', 'feijoada', 'macarronada'];
const menuDeSobremesas = ['pudim', 'sorvete', 'brigadeiro'];
const menuCompleto = menuPrincipal .concat(menuDeSobremesas);
console.log('Veja o menu completo:', menuCompleto );


console.log('\nDesafio 05: ');
let matriz = [];
let valorInicial = 1;
for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}
console.log('Matriz de duas dimensões:');
console.log(matriz);
console.log('')
matriz.forEach(row => console.log(row)); 


console.log('\nDesafio 05: ');