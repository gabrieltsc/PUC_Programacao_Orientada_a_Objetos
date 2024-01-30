function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;

    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa('Fulano', 1990, 'Estudante');
console.log(pessoa);
console.log('Idade: ' + pessoa.calculaIdade());