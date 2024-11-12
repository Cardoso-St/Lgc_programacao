//entrada
let salariobase, bolsonaro, taxad, salariofin

salariobase = parseFloat(prompt("Digite o seu salário base"))

taxad = 0.07
bolsonaro = 0.05

//processo

bolsonaro = bolsonaro * salariobase
salariofin = (salariobase + bolsonaro)
taxad = salariofin * taxad
salariofin = (salariobase + bolsonaro) - taxad

//saída
document.write("Seu salário final é: R$" + salariofin)