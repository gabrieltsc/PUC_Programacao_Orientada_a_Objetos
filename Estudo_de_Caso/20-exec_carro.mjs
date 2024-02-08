import { Carro } from "./19-Carro.mjs";
import { CarroComPlaca } from "./21-carroComPlaca.mjs";
import { Locadora } from "./22-Locadora.mjs";

const carro1 = new Carro(50);
carro1.mostraDados();

carro1.tanque = 20;
carro1.mostraDados();

carro1.tanque = 20;
carro1.mostraDados();

carro1.tanque = 20;
carro1.mostraDados();

const carro2 = new CarroComPlaca('REL-3H72');
carro2.mostraDados()
carro2.tanque = 30;
carro2.mostraDados();
carro2.tanque = 30;
carro2.mostraDados();

const carro3 = new CarroComPlaca('DEI-7D40')

const locadora1 = new Locadora();
locadora1.adicionaCarro(carro2);
locadora1.adicionaCarro(carro3);
locadora1.consultaCarros();

locadora1.abasteceCarro(1, 30);
locadora1.consultaCarros();