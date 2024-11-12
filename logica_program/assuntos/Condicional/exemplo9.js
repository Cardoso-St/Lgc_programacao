let n1, n2, n3, media

n1 = parseFloat(prompt("Digite nota 1?"))
//if(((n1 || n2 || n3) < 1) || ((n1 || n2 || n3) > 10)

if(n1 <= 10 & n1 >= 1){
    n2 = parseFloat(prompt("Digite nota 2?"))
    
    if(n2 <= 10 & n2 >= 1 ) {
        n3 = parseFloat(prompt("Digite nota 3?"))
        
        if(n3 <= 10 & n3 >= 1){

        media = (n1+n2+n3) / 3
        if(media >= 7){

            document.write(`Você passou com média ${media.toFixed(2)}`)
        } else{
            document.write(`Você reprovou com média ${media.toFixed(2)}`)
        }
        

        } else {
            document.write(`Só aceitamos notas de 0 a 10, digite novamente`)
        }
    } else {
        document.write(`Só aceitamos notas de 0 a 10, digite novamente`)
    }
} else {
    document.write(`Só aceitamos notas de 0 a 10, digite novamente`)
}



