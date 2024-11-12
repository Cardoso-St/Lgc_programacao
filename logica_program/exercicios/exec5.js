// dados de entrada 
let n1, n2, n3;
let media;

n1 = parseFloat(prompt("Digite a nota 1"));
n2 = parseFloat(prompt("Digite a nota 2"));
n3 = parseFloat(prompt("Digite a nota 3"));

//processamento
media = (n1 + n2 + n3) / 3;

//saida de dados
document.write(`A media das notas é ${media.toFixed(2)}`);
