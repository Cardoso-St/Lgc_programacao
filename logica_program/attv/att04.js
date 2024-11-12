let qtdNumero, numeroEscolhido, fatorial

do {
    qtdNumero = parseInt(prompt("Digite quantos numeros você quer saber o fatorial"))
    if (qtdNumero <= 0 || isNaN(qtdNumero)) {
        alert("Valor inválido")
    }
} while (qtdNumero <= 0 || isNaN(qtdNumero))

for (let i = 1; i <= qtdNumero; i++) {

    do {
        numeroEscolhido = parseInt(prompt(`Digite o ${i} numero para saber o fatorial`))
        if (numeroEscolhido <= 0 || isNaN(numeroEscolhido)) {
            alert("Valor inválido")
        }
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido))

    fatorial = 1

    for (let j = 1; j <= numeroEscolhido; j++) {
        fatorial = fatorial * j

    }

    document.write(`<p>O fatorial de ${numeroEscolhido} é ${fatorial}</p>`)

}