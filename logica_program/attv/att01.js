let n1, contadora = 0

do {
    n1 = parseInt(prompt("Digite um número para saber se ele é primo ou não"))
    if (n1 === 0 || isNaN(n1)) {
        alert("Por favor, digite um positivo e maior que 0")
    }
} while (n1 === 0 || isNaN(n1));

for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
        contadora++
    }

}

if (contadora === 2) {
    document.write(`<h2>O número ${n1} é um número primo</h2>`)
} else {
    document.write(`<h2>O número ${n1} não é um número primo</h2>`)
}