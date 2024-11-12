// E = 1 + 1/1! + 1/2! + 1/3 + ... + 1/10!

let e = 1, numero, fatorial

numero = Number(prompt("Digite um número:"))

for (let i = 1; i <= numero; i++) {

    fatorial = 1
    for (var j = 1; j <= i; j++) {
        fatorial = fatorial * j
        document.write(`fatorial ${j}: ${fatorial}<br>`)
    }
    
    e = e + 1 / fatorial
}

document.write(`Valor final de E = ${e.toFixed(2)}`)

