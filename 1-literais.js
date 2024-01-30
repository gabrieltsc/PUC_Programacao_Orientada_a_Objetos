
const pessoa = {
    nome: 'Fulano',
    anoDeNascimento: 1990,
    profissao: 'Estudante',

    calculaIdade: function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    }
};

console.log(pessoa);
console.log('Idade: ' + pessoa.calculaIdade());