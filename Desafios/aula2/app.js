// Desafio 1: 
function mensagem() {
    console.log('Olá, mundo!');
}
mensagem();

// Desafio 2:
function apresentacao(nome){    
    console.log(`Olá, ${nome}!`);
}
apresentacao('Luiz')

// Desafio 3:
function dobro(numero) {
    return numero * 2 ;  
}

let resultadoDobro = dobro(10);
console.log(resultadoDobro);

// Desafio 4:
function media(a, b, c) {
    return (a + b + c) / 3;
}
let resultadoMedia = media(8, 6, 5)
console.log(resultadoMedia);

// Desafio 5:
// (Resposta:
//function encontrarMaior(a, b) {
//  return a > b ? a : b;
//let maiorNumero = encontrarMaior(15, 9);
//console.log(maiorNumero);)

function maiorOuMenor(a, b) {
    if (a > b) {
        console.log(`${a} é maior que ${b}`);
    } else {
        console.log(`${b} é maior que ${a}`);
    }
}
maiorOuMenor(8, 5)



// Desafio 6:

function quadrado(a) {
    return (a * a);
}
let resultado = quadrado(5)
console.log(resultado);