// O uso do let torna a variável privada
function Pessoa() {
    let nome = "Gabriel";
    let anoDeNascimento = 2000;
    let profissao = "Engenheiro";

    this.getNome = function(){
        return nome;
    }

    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa();
console.log(pessoa);
console.log(pessoa.getNome());