let numero

numero = parseFloat(prompt("Digite um número"))

if(numero >= 10 && numero <= 20){
    document.write(`O número ${numero} está inserido no intervalo entre 10 e 20`)
} else {
    document.write(`O número ${numero} não está inserido no intervalo entre 10 e 20`)
}