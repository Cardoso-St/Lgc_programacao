//dados de entrada
let valor, prestacoes

prestacoes = 5
valor = parseFloat(prompt("Digite o valor da compra"))

//processamento 
valor = valor / prestacoes

//saida
document.write(`Esse valor dividido em 5 parcelas seria equivalente a ${valor} por mês`)
