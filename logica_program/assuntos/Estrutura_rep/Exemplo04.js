let n1


do {
    n1 = parseFloat(prompt("Digite um numero"))
    if(isNaN(n1) || n1 === 0) {
        let sair = prompt("Confirma a saída?")
        if(sair === "Sim"){
          break;
        } else{
          continue;
        }

    } if (n1 % 2 === 0) {
         document.write(`${n1 * 2}`)
      } else {
        document.write(`${n1 * 3}`)
      } 
    
}while(true)
