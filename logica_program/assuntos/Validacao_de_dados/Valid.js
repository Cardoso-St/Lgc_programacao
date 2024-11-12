//Validações = garantir que o codigo ocorra perfeitamente
//isNaN -> Pergunta se é um número
// "" -> Verifica se está vazio

let numero1
do {
    numero1 = parseFloat(prompt("Digite um numero"));
    if(isNaN(numero1) || numero1 === 0) {
        alert("Número inválido")
    }

}while(isNaN(numero1) || numero1 === 0)

let numero2
do {
    numero2 = parseFloat(prompt("Digite um numero"));
    if(isNaN(numero2) || numero2 === 0) {
        alert("Número inválido")
    }

}while(isNaN(numero2) || numero2 === 0)