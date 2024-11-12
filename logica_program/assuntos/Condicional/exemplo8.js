let ano

ano = parseFloat(prompt("Você está em que ano?"))

if(ano % 4 === 0 ){ 
   document.write(`${ano} é bissexto`)
}else if (ano % 1 === 0 ) {
   document.write(`${ano} não é bissexto`)
}

