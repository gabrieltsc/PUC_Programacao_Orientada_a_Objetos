// Mecanismo de herança
function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;

    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa('Fulano', 1990, 'Estudante');
console.log(pessoa.valueOf());
console.log(Object.getPrototypeOf(pessoa));
console.log(pessoa.constructor + '\n');

const pessoa2 = Object.create(pessoa);
console.log(pessoa.valueOf());
console.log(Object.getPrototypeOf(pessoa2));
console.log(pessoa.constructor);

Pessoa.prototype.saudar = function() {
    return "Olá";
}

console.log(pessoa.saudar());
console.log(pessoa2.saudar());

const pessoa3 = new Pessoa("Antonia", 1930, "Bibliotecaria");

console.log(pessoa3.saudar());