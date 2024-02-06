/*function testConst(){
    const const1 = "valor";
    console.log('Olá ' + const1);

    const1 = "novo valor";
    console.log('Olá ' + const1);
}*/

function testConst(){
    const const1 = {propriedade: "valor"}; // Um objeto é um apontamento
    console.log('Olá ' + const1.propriedade);

    const1.propriedade = "novo valor";
    console.log('Olá ' + const1.propriedade);
}

testConst();