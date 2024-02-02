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
    };

    mostraDados() {
        console.log('Nome: ' + this.nome + '\n' +
                'Ano de nascimento: ' + this.anoDeNascimento + '\n' +
                'Profissão: ' + this.profissao);
    };
};


class Estudante extends Pessoa {
    #matricula; // Atributo privado
    notas = [];
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    };

    getMatricula(){
        return this.#matricula.toString(); // Devolver em formato de string evita burlar o encapsulamento
    };

    setMatricula(valor){
        this.#matricula = valor;
    };

    mostraDados() {
        super.mostraDados();
        console.log('Matrícula: ' + this.getMatricula());
    };
};

class Nota {
    #grau; // Grau é protegido
    constructor(disciplina, grau){
        this.disciplina = disciplina;
        this.#grau = grau;
    };

    setGrau(valor){
        if (valor < 0 || valor > 10){
            throw new Error("Valor inválido inserido");
        };
        this.#grau = valor;
    };

    getGrau() {
        return this.#grau.toString();
    };
};

const aluno1 = new Estudante('Julio', 1999, 2616545);
console.log(aluno1.valueOf());

aluno1.notas = [new Nota("Orientação a Objetos", 9), new Nota("Algoritmos", 8), new Nota("Matemática", 10)];
console.log(aluno1.valueOf());

for (let i = 0; i < aluno1.notas.length; i++){
    console.log(aluno1.notas[i].getGrau());
};
