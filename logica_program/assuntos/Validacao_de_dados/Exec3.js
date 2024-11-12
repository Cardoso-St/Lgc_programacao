let Ncinquenta, Ncem, Ndez, retirada

retirada = parseFloat(prompt("Digite quanto você quer retirar"))

if (retirada % 10 !== 0 ){
    document.write(`Valor invalido`)
} else {
    valor = retirada 

    Ncem = Math.floor(valor/100)
    Valor %= 100

    Ncinquenta = Math.floor(valor/50)
    Valor %= 50

    Ndez = Math.floor(valor/10)

    document.write(`Notas de 100: ${Ncem}\n Notas de 50 ${Ncinquenta} Notas de 10 ${Ndez}`)
}