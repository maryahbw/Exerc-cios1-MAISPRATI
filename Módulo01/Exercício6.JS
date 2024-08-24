//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require("prompt-sync")()

let a = parseFloat(prompt("Digite o Primeiro lado do Triângulo "));
let b = parseFloat(prompt("Digite a Segundo lado do Triângulo "));
let c = parseFloat(prompt("Digite a Terceiro lado do Triângulo "));

a < b + c && b < a + c && c < a + b;

if (parseFloat(a == b || a == c || b == c)) {
    console.log("Triângulo isósceles");
}
else if (parseFloat(a != b && b != c)) {
    console.log("Triângulo escaleno");
}
else if (parseFloat(a == b && b == c)) {
    console.log("Triângulo eqüilátero");
} else {
    console.log("Valor indefinido!");
}