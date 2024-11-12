//entrada 
let salario, percentual, salariof  

salario = parseFloat(prompt("Informe seu salário"))

percentual = parseFloat(prompt("Digite o percentual salário"))

//processo

salariof = salario + (salario * (percentual /100 ))

//saída
document.write("Seu salário " + salariof + "<br>")