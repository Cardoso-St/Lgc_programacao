//Entrada
let deposito, percentual, resultado

percentual = 0.07
deposito = parseFloat(prompt("Digite o valor que você irá depositar"))

/*Processsamento
resultado = deposito * percentual
deposito = deposito + resultado*/
resultado = deposito + (deposito * percentual)

//Saída
document.write(`Seu montante em 1 mês será ${resultado}`)
