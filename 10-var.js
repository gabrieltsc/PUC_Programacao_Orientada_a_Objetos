/*function testVar(){
    var var01 = "var 01";
    {
        console.log("Dentro do bloco:");
        var var02 = "var 02";
        console.log("Olá " + var01);
        console.log("Olá " + var02);
    }
    console.log("\nFora do bloco:");
    console.log("Olá " + var01);
    console.log("Olá " + var02);
}*/

function testVar(){
    var var01 = "var 01";
    if (1==0){
        console.log("Dentro do bloco:");
        var var02 = "var 02";
        console.log("Olá " + var01);
        console.log("Olá " + var02);
    }
    console.log("\nFora do bloco:");
    console.log("Olá " + var01);
    console.log("Olá " + var02);
}

testVar();