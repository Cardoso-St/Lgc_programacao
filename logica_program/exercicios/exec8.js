let d, h, s, m 

s = parseFloat(prompt("Digite o tempo em segundos"))

h = s / 3600
d = s / 86400
m = s / 60

document.write(`A quantidade em minutos é: ${m}<br>`)
document.write(`A quantidade em dias é: ${d}<br>`)
document.write(`A quantidade em horas é: ${h}<br>`)
