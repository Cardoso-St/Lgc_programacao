
let numero

numero = parseFloat(prompt("Quantos dias tem o ano atual?"));

if(numero == 366) {
    document.write(`Seu ano é bissexto`)
} else if (numero == 365) {
    document.write(`Seu ano é um ano normal`)
} else {
    document.write(`Seu ano não possui dias o suficiente para ser considerado ANO`)
}



