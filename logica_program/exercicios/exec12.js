let valor, valorvenda, percentual

valor = parseFloat(prompt("Digite o valor do seu item"))
percentual = parseFloat(prompt("Digite o valor do acréscimo"))

valorvenda = valor + (valor * ( percentual / 100))

document.write(`O valor do produto mais o acréscimo de ${percentual} ficará ${valorvenda}`)