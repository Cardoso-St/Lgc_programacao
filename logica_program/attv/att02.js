let qtdChin, tempoCria
let totalChin

do {
    qtdChin = parseInt(prompt("Digite a quantidade de Chinchilas"))
    if (qtdChin <= 2 || isNaN()) {
        alert("Por favor, digite um positivo e maior ou igual a 2")
    }
} while (qtdChin <= 2 || isNaN(qtdChin))

do {
    tempoCria = parseInt(prompt("Digite por quanto tempo quer criar as chinchilas"))
    if (tempoCria <= 1 || isNaN(tempoCria)) {
        alert("O tempo de criação deve ser maior que 1 ano")
    }
} while (tempoCria <= 1 || isNaN(tempoCria))

totalChin = qtdChin

for (let i = 2; i <= tempoCria; i++) {
    totalChin = totalChin * 3
    document.write("Total de chinchilas: " + totalChin+ "<br>")

}



