// dados de entrada 
let Valor1, Valor2

Valor1 = parseFloat(prompt("Digite o valor da variável A"))
Valor2 = parseFloat(prompt("Digite o valor da variável B"))
const Valor3 = Valor1

//saida de dados
document.write(`O valor 1 é ${Valor1} e o valor 2 é ${Valor2}`)

Valor1 = Valor2
Valor2 = Valor3

document.write(` Agora o valor 1 é ${Valor1} e o valor 2 é ${Valor2}`)