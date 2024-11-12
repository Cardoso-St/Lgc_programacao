let valor1, valor2

valor1 = parseInt(prompt("Digite o primeiro valor"))
valor2 = parseInt(prompt("Digite o segundo valor"))

if(valor1 > valor2) {
    document.write(`Valor1 ${valor1} é maior que valor 2 ${valor2}`)
}else if (valor1 < valor2) {
    document.write(`Valor2 ${valor2} é maior que valor 1 ${valor1}`)
} else {
    document.write(`Os valores são iguais`)
}