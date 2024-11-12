let hrsBr, HrsFran

hrsBr = parseFloat(prompt("Digite que horas são no Brasil que eu te digo que horas são na França"))

if (hrsBr <= 0 & hrsBr >= 23) {

    HrsFran = hrsBr + 5

    if (HrsFran >= 23) {
        HrsFran -= 23
        document.write(`A horas aqui são ${hrsBr.toFixed(2)} e na França é: ${HrsFran.toFixed(2)}`)
    } else {
        document.write(`A horas aqui são ${hrsBr.toFixed(2)} e na França é: ${HrsFran.toFixed(2)}`)
    }


} else {
    document.write(`O dia só possui 24 hrs, lesado`)
}

