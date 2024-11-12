/*let numero = 2

while(numero !== 10) { 
    numero = Math.floor(Math.random() * 10)
    console.log(numero)
}

console.log("Saiu o laço")*/



for(let i = 1; i <= 10; i++){
    if(i === 3) {
        continue; // pula interação, testa mais uma vez a condição
    }

    if(i === 7){
        break; // Para a execução/
    }
    console.log(i)
}