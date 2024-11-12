let lado1, lado2, lado3

lado1 = parseFloat(prompt("Digite lado 1"))
lado2 = parseFloat(prompt("Digite lado 2"))
lado3 = parseFloat(prompt("Digite lado 3"))

if(lado1 + lado2 > lado3){
    document.write(`Seu triângulo é valido`)
} else {
    document.write(`Seu triângulo é não valido`)
}