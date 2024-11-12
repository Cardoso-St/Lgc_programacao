let conta, total = 0, resposta

do {
    conta = parseFloat(prompt("Digite um numero"))
    if(isNaN(conta) || conta === 0) {
        alert("Valor inválido, digite um número")
    } else if(resposta != "Sim"){
      total = conta + total
      resposta = (prompt("Deseja continuar a inserir contas?"))
      
    }

    
}while(true)


