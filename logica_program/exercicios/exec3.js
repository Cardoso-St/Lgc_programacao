//1° Entrada de dados
let numero1, numero2
let soma, sub, multi, divi

numero1 = parseFloat(prompt("Digite um valor para o primeiro número..."))
numero2 = parseFloat(prompt("Digite um segundo número..."))

//processamento

soma = numero1 + numero2
sub = numero1 - numero2
multi = numero1 * numero2
divi = numero1 / numero2

//saida
document.write (`A soma de ${numero1} + ${numero2} = ${soma} <br>`)
document.write (`A subtração de ${numero1} - ${numero2} = ${sub} <br>`)
document.write (`A multiplicação de ${numero1} * ${numero2} = ${multi} <br>`)
document.write (`A divisão de ${numero1} / ${numero2} = ${divi} <br>`)