let numero

numero = parseFloat(prompt("Digite um número"))

if(numero > 0){
    document.write(`${numero} é positivo`)
} else if (numero == 0) {
    document.write(`${numero} é nulo`)
} else {
    document.write(`${numero} é negativo`)
}