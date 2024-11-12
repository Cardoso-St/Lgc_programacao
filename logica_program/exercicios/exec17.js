let lula, bolsonaro, taxad, bolsa_familia

bolsonaro = 50
taxad = 0.10
lula = parseFloat(prompt("Digite o seu salário base"))

taxad = lula * taxad
bolsa_familia = (lula - taxad) + bolsonaro

document.write(`Seu salário final é ${bolsa_familia}`)