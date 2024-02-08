array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

regraImpar = (item) => item % 2 != 0; // Arrow Function

regraPrimo = (item) => { // Testa quantos divisores o número recebido tem
    let ndiv = 0; // Contador de divisores
    for (let divisor = 1; divisor <= item; divisor++){
        if (item % divisor == 0){
            ndiv++;
        }
    }
    if (ndiv == 2){ // Só é primo se possuir apenas 2 divisores
        return true;
    }
    else {
        return false;
    }
}

nroDivisores = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item ; divisor++){
        if (item % divisor == 0){
            ndiv++;
        }
    }
    return ndiv;
}

// array.some
console.log("Há algum número ímpar na lista? " + array.some(regraImpar));
console.log("Há algum número primo na lista? " + array.some(regraPrimo));

// array.every
console.log("\nTodos os números são ímpares? " + array.every(regraImpar));
console.log("Todos os números são primos? " + array.every(regraPrimo));

// array.filter
console.log("\nFiltro de números ímpares: " + array.filter(regraImpar));
console.log("Filtro de números primos: " + array.filter(regraPrimo) + "\n");

// array.forEach() --Cria um for que percorre a lista através de seus elementos passados como parâmetro da Arrow function
array.forEach( 
    (numero) => console.log(numero + " -> " + (numero % 2 == 0 ? "par" : "impar")) // Operação ternária
);

array.forEach(
    (numero) => {
        console.log(numero +  `-> Quantidade de divisores de 1 até ${numero}: ` + nroDivisores(numero));
});

// array.reduce --Permite retornar o acúmulo das mudanças realizadas ao longo de um for que percorre o array
let resultado = array.reduce(
    (valorAcumulado, valorAtual) => valorAcumulado += (valorAtual % 2 == 0) ? valorAtual : 0, 0  // Índice de início
)

console.log("Soma dos números pares: " + resultado);

// array.map --Cria uma nova lista com base em uma antiga, permindo até a alteração do tipo de dado
var newArray = array.map( (item) => item*2 );
console.log(newArray);

newArray = array.map( (item) => {return {x: item, y: 2*item}} );
console.log(newArray);

// Juntando Operações
array
    .filter((numero) => nroDivisores(numero) == 2) // Cria uma lista com todos os primos
    .map((item) => {return {x: item, par: (item % 2 == 0)}}) // Cria uma lista dos primos como objetos mostrando seu conteúdo e se é um numero par ou não
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par)); // imprime o resultado final usando forEach