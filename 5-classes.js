// Modelos para criar objetos
class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    saudar() {
        return "Olá, eu sou " + this.nome;
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }

    mostraDados() {
        return 'Nome: ' + this.nome + '\n' +
                'Ano de nascimento: ' + this.anoDeNascimento + '\n' +
                'Profissão: ' + this.profissao + '\n';
    }
}

const pessoa1 = new Pessoa('Gabriel Terry', 2000, 'Engenheiro de Software');
console.log(pessoa1.mostraDados());


class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    }

    mostraDados() {
        return 'Nome: ' + this.nome + '\n' +
                'Ano de nascimento: ' + this.anoDeNascimento + '\n' +
                'Profissão: ' + this.profissao + '\n' +
                'Matrícula: ' + this.matricula + '\n';
    }
}

const aluno1 = new Estudante('Julio', 1999, 2616545);
console.log(aluno1.mostraDados());


class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    }

    mostraDados() {
        return 'Nome: ' + this.nome + '\n' +
                'Ano de nascimento: ' + this.anoDeNascimento + '\n' +
                'Profissão: ' + this.profissao + '\n' +
                'Titulação: ' + this.titulacao + '\n';
    }
}

const professor1 = new Professor('Martha', 1970, 'Mestre');
console.log(professor1.mostraDados());