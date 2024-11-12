let salario, salariofinal, percentual
percentual = 0.25

salario = parseFloat(prompt("Digite o valor do seu salario"))

salariofinal = salario + (salario * percentual)

document.write(`O salario de ${salario} R$ mais o percentual de 25% dará um salario final de ${salariofinal}`)

