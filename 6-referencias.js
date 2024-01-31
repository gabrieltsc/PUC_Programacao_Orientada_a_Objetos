function criarPessoa(nome, anoDeNascimento, profissao) {
    return {
        nome,
        anoDeNascimento,
        profissao,
    }
}

const pessoa1 = criarPessoa("Fulano de tal", 1990, "Estudante");
const pessoa2 = pessoa1;

pessoa2.anoDeNascimento = 2000; // Mudar um objeto referenciando outro altera ambos

console.log(pessoa1);
console.log(pessoa2);
