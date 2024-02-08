import { Carro } from "./19-Carro.mjs";

export class CarroComPlaca extends Carro {
    #_placa
    constructor(placa){
        super(50);
        this.#_placa = placa;
    }

    get placa(){
        return this.#_placa.toString();
    }

    mostraDados(){
        super.mostraDados()
        console.log(`Placa do carro: ${this.placa}`)
    }
}