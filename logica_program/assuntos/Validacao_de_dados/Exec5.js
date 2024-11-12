let Vel, limite, mul_leve

limite = 80

Vel = parseFloat(prompt("digite a velocidade do condutor"))

mul_leve = (0,2 * limite) + limite


if(Vel <= limite) {
    document.write(`Não será aplicado multa`)
} else if(Vel >= mul_leve ) {
     document.write(`Uma multa leve será aplicada`)
} else {
    document.write(`Uma multa grave será aplicada`)
}

