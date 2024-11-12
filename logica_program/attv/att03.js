let n1
let NPerfeito = 0

do {
    n1 = parseInt(prompt("Digite um número para saber se ele é perfeito ou não"))
    if (n1 <= 0 || isNaN(n1)) {
        alert("Por favor, digite um positivo e maior que 0")
    }
} while (n1 <= 0 || isNaN(n1))

for (let i = 0; i <= n1; i++) {
    if (n1 % i === 0) {
        NPerfeito = NPerfeito + i
    }
}
if(n1 === NPerfeito){
    document.write(`O número ${n1} é perfeito`)
} else {
    document.write(`O número ${n1}  não é perfeito`)
}
