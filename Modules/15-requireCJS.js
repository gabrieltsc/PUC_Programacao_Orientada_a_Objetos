// Atribuindo a uma constante
const circulo = require('./14-exportsCJS');
console.log(`Área do círculo: ${circulo.area(4)}`);

// Acessando a função diretamente
const {area} = require('./14-exportsCJS');
console.log(`Área do círculo igual a 2: ${area(2)}`);

// Chamando um objeto
const Circulo = require('./16-exportsCJS_2');
const c1 = new Circulo(5);
console.log(`Área do círculo criado como objeto: ${c1.area()}`);