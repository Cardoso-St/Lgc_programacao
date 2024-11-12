let num_op, sexo_op, pecas_op, salario_op, salario_op_maior, num_op_maior
let total_folha = 0
let total_pecas = 0
let media_m = 0
let media_f = 0
let quant_m = 0
let quant_f = 0
const salarioMinimo = 1000

for (let i = 1; i <= 3; i++) {

    do {
        num_op = parseInt(prompt("Digite quantos numeros você quer saber o fatorial"))
        if (num_op <= 0 || isNaN(num_op)) {
            alert("Valor inválido")
        }
    } while (num_op <= 0 || isNaN(num_op))

    do {
        sexo_op = prompt("Digite M - masculino \n F - Feminino").toUpperCase()
        if (sexo_op != "M" && sexo_op != "F") {
            alert("Valor inválido")
        }
    } while (sexo_op != "M" && sexo_op != "F")

    do {
        pecas_op = parseInt(prompt("Digite quantos numeros você quer saber o fatorial"))
        if (pecas_op <= 0 || isNaN(pecas_op)) {
            alert("Valor inválido")
        }
    } while (pecas_op <= 0 || isNaN(pecas_op))

    if (pecas_op <= 20) {
        salario_op = salarioMinimo

    } else if (pecas_op > 20 && pecas_op <= 30) {
        salario_op = salarioMinimo + (pecas_op - 20) * (3 / 100) * salarioMinimo

    } else {
        salario_op = salarioMinimo + (pecas_op - 30) * (5 / 100) * salarioMinimo + ((pecas_op - 20) * (3 / 100) * salarioMinimo)
    }

    document.write(`<h3> O operário do código ${num_op} - ${sexo_op} recebe o salário de R$ ${salario_op.toFixed(2)}</h3>`)

    if (sexo_op === "M") {
        media_m = media_m + pecas_op
        quant_m++

    } else if (sexo_op === "F") {
        media_f = media_f + pecas_op
        quant_f++

    }


    //1° -> 1 - 1000
    //2° -> 2 - 600
    //3° -> 3 - 1500

    if (i === 1) {
        salario_op_maior = salario_op
        num_op_maior = num_op
    } else {
        if (salario_op_maior < salario_op) {
            salario_op_maior = salario_op
            num_op_maior = num_op
        }
    }


    total_folha = total_folha + salario_op

    total_pecas = total_pecas + pecas_op

}

document.write(`O total da folha de pagamento é  ${total_folha} <br>`)

document.write(`O total de peças é  ${total_pecas} <br>`)

if (media_m === 0) {
    document.write(`Nenhuma peça foi produzida pelo sexo masculino`)
} else {
    media_m = media_m / quant_m
    document.write(`A média de peças fabricadas pelo sexo masculino foi: ${media_m}<br>`)
}

if (media_f === 0) {
    document.write(`Nenhuma peça foi produzida pelo sexo feminino`)
} else {
    media_f = media_f / quant_f
    document.write(`A média de peças fabricadas pelo sexo feminino foi: ${media_f}<br>`)
}

document.write(`O número do operário com o maior salário é: ${num_op_maior}`)
