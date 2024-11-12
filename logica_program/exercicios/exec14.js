let vendedor, salario, vendas, salarioFinal, percentual

percentual = 0.15
vendedor = (prompt("Digite o nome do vendedor"))
salario = parseFloat(prompt("Digite o seu salario"))
vendas = parseFloat(prompt("Digite o valor que o vendedor vendeu esse mês"))

salarioFinal = salario + (vendas * percentual)

document.write(`O salario do vendedor ${vendedor} mais o percentual de 15% dará um salario final de ${salarioFinal} R$`)

