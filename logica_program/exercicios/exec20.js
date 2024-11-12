let pe, polegada, milha, jardas

pe = parseFloat(prompt("Digite o tamanho na unidade de medida Pés"))

polegada = pe * 12
jardas = pe / 3
milha = jardas / 1790

document.write(`${pe} pés equivale a ${polegada} pol ou ${jardas.toFixed(2)} jardas ou ${milha.toFixed(2)} milhas `)