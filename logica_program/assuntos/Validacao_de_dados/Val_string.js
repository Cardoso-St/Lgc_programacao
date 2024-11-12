let escola = "Sen@i"

console.log(escola)
console.log(escola.toUpperCase())//Caixa alta
console.log(escola.toLowerCase())//Caixa baixa
console.log(escola.length)//Contar a qtd de caracteres
console.log(escola.includes("@"))
console.log(escola.includes("s"))
console.log(escola.replace("@", "a").toUpperCase())

//Identificar o elemento de acordo com seu indice 
console.log(escola.charAt("3"))
console.log(escola.indexOf("@"))
console.log("Steven;Cardoso;Batista".split(";"))
console.log("Steven;Cardoso;Batista".replace(";", "-"))