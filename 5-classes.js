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
        console.log('Nome: ' + this.nome + '\n' +
                'Ano de nascimento: ' + this.anoDeNascimento + '\n' +
                'Profissão: ' + this.profissao);
    }
}


class Estudante extends Pessoa {
    #matricula; // Atributo privado
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    }

    getMatricula(){
        return this.#matricula;
    }

    setMatricula(valor){
        this.#matricula = valor;
    }

    mostraDados() {
        super.mostraDados();
        console.log('Matrícula: ' + this.getMatricula());
    }
}


class Professor extends Pessoa {
    #titulacao
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.#titulacao = titulacao;
    }

    getTitulacao() {
        return this.#titulacao;
    }

    mostraDados() {
        super.mostraDados();
        console.log('Titulação: ' + this.getTitulacao());
    }
}


const pessoa1 = new Pessoa('Gabriel Terry', 2000, 'Engenheiro de Software');
pessoa1.mostraDados();
console.log('\n');

const aluno1 = new Estudante('Julio', 1999, 2616545);
aluno1.mostraDados();
console.log('\n');

const professor1 = new Professor('Martha', 1970, 'Mestre');
professor1.mostraDados();
console.log('\n');

// Protótipo de apresentação do conteúdo do objetos
console.log(professor1.valueOf()); 
console.log(aluno1.valueOf());
console.log(pessoa1.valueOf());

const professor2 = new Professor("Adriano", 1983, "Especialista");
console.log(professor2.valueOf());

professor2.formacao = "Publicidade"; // Uma forma de adicionar um atributo novo
console.log(professor2.valueOf());

delete professor2.formacao;
console.log(professor2.valueOf());

// Criando um novo atributo acessível (mas invisível, no protótipo)
Professor.prototype.formacao = "Favor inserir uma formação"; 

console.log(professor1.valueOf());
console.log(professor1.formacao);