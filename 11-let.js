function testLet(){
    let let01 = "let 01";
    {
        console.log("Dentro do bloco:");
        let let02 = "let 02";
        console.log("Olá " + let01);
        console.log("Olá " + let02);
    }
    console.log("\nFora do bloco:");
    console.log("Olá " + let01);
    console.log("Olá " + let02); // Let 02 não existe fora do bloco
}

testLet();