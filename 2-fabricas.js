// Armazena os dados em memória
function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,

        calculaIdade: function(){
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    }
}

const pessoa = criarPessoa('Fulano', 1990, 'Estudante');
console.log(pessoa);
console.log('Idade: ' + pessoa.calculaIdade());

const pessoa2 = criarPessoa('Gabriel', 1990, 'Engenheiro de Software');