let numero

numero = parseFloat(prompt("Digite um número que eu te direi a tabuada do mesmo"))

for (let i = 1; i <= 10; i++) {
    document.write(`${numero}x${i} = ${numero*i} <br>`)
} 