let n1, n2

n1 = parseFloat(prompt("Digite numero 1"))

n1 = Math.sqrt(n1)

if(Number.isInteger(n1)) {
    document.write(`A Raiz é ${n1}, portanto é exata`)
} else {
    document.write(`A Raiz é ${n1}, portanto não é exata`)
}



