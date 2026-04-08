
const prompt = require('prompt-sync')();

const valorA = Number(prompt('Digite o primeiro número: '))
const valorB = Number(prompt('Digite o segundo número: '))

// retorna o valor da soma entre os dois parâmetros
function sum(v1, v2) {
    return v1 + v2
}

// retorna o valor da subtração entre os dois parâmetros
//function sub(v1, v2) {}

// retorna o valor da divisão entre os dois parâmetros
function div(v1, v2) {
    if (v2 === 0) {
        return 'Erro: divisão por zero'
    } else {
        return v1 / v2
    }
}

// retorna o valor da multiplicação entre os dois parâmetros
//function mult(v1, v2) {}

// retorna o valor da raiz quadrada do valor recebido por parâmetro
//function square(v1) {}

console.log('Soma:', sum(valorA, valorB))
console.log('A divisão resulta em: ', div(valorA, valorB))
