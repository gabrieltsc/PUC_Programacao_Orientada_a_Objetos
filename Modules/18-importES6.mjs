// Importando diretamente as funções
import {area, circunferencia as circ, circunferencia} from "./17-exportES6.mjs";
console.log(`Área do círculo de raio 4: ${area(4)}`);
console.log(`Circunferência do círculo de raio 4: ${circunferencia(4)}`);

// Importando como objeto
import * as circulo from "./17-exportES6.mjs";
console.log(`Área do círculo de raio 4 (objeto): ${circulo.area(4)}`);