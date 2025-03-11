var prompt = require('prompt-sync')();

//Crie um array com 5 números inteiros e exiba no console
console.log("Crie um array com 5 números inteiros e exiba no console");
const numeros = ["1", "2", "3", "4", "5"];
console.log(numeros);

//Acesse o terceiro elemento do array e o exiba no console:
console.log("\nAcesse o terceiro elemento do array e o exiba no console:");
console.log(numeros[3]);

//Altere o valor do segundo elemento para 10
console.log("\nAltere o valor do segundo elemento para 10");
numeros[1] = 10;
console.log(numeros);

//Adicione um novo elemento no final do array
console.log("\nAdicione um novo elemento no final do array");
numeros.push("6");
console.log(numeros);

//Remova o primeiro elemento do array
console.log("\nRemova o primeiro elemento do array");
numeros.shift()
console.log(numeros);

//Imprima os elementos de um array usando um loop while ou for
console.log("\nImprima os elementos de um array usando um loop while ou for");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Acrescente elementos na array até o usuário escrever fim
console.log("\nAcrescente elementos na array até o usuário escrever fim:");
let elemento;
while (true) {
    elemento = prompt("Digite um elemento para acrescentar na array: ").toUpperCase();
    if (elemento == "FIM") {
        break;
    }
    numeros.push(elemento);
}
console.log(numeros);

//Acrescente elementos na array até o a array ficar com 10 elementos
console.log("\nAcrescente elementos na array até o a array ficar com 10 elementos");
for (let i = numeros.length; i < 10; i++) {
    let elemento = 0;
    elemento = prompt("Adicione elementos na array: ");
    numeros.push(elemento);
}
console.log(numeros);

