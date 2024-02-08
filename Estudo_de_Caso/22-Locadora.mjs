export class Locadora{
    #_carros
    constructor(){
        this.#_carros = [];
    }

    adicionaCarro(umCarro){
        this.#_carros.push(umCarro);
        console.log(`Quantidade de carros na locadora: ${this.#_carros.length}`);
    }

    consultaCarros(){
        this.#_carros.forEach(
            (carro) => console.log(`Placa do carro: ${carro.placa} \nTanque: ${carro.tanque}`)
        )
    }

    abasteceCarro(index, qtde){
        if(index >= 0 && index < this.#_carros.length){
            this.#_carros[index].tanque = qtde;
        }
    }
}