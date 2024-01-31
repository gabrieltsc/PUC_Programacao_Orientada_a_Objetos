// Métodos e atributos estáticos podem ser utilizados mesmo sem instâncias
class ValidadorCPF {
    static TAMANHO_CPF = 11;

    static validar(cpf) {
        if (cpf.length == this.TAMANHO_CPF) {
            console.log(cpf + " é um CPF válido");
            return
        }
        console.log(cpf + " não é um CPF inválido");
    }
}

ValidadorCPF.validar("05918876146");
ValidadorCPF.validar("12345678");