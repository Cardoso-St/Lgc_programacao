let dolar, real, conversao

real = parseFloat(prompt("Digite o valor que você quer converter"))
dolar = parseFloat(prompt("Digite quanto o dolar está valendo nos dias de hoje"))

conversao = real / dolar

document.write(`Em real você possui ${real}R$ que seria equivalente a ${conversao.toFixed(2)}$`)

if (conversao < 3) {
document.write(`Nem vá seu liso`)
} else {
document.write(`a mãe da camila é linda`)
}
