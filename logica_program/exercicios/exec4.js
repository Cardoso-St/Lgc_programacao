// dados de entrada 
let distancia, combustivel, media 

distancia = parseFloat(prompt("Digite a distância percorrida pelo automóvel"))
combustivel = parseFloat(prompt("Digite aa quantidade de combustivel gasto pelo automóvel"))

//processamento
media = distancia / combustivel

//saida de dados
document.write(`O consumo médio do automóvel é de ${media.toFixed(2)}km/l`)


