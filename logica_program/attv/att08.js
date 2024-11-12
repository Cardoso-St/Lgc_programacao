let contadora, Cd_cidade, N_veiculos_passeio, N_acidentes
let Maior_Acidentes, Cidade_Mais_Acidentes, Menor_Acidentes, Cidade_Menos_Acidentes, media_veiculos_passeio, media_Acidentes_menos_2000_V
let Soma_Veiculos_Passeio = 0, Soma_Acidentes_menos_2000_V = 0, Contador_Cidade_Menos_2000_V = 0


for (contadora = 1; contadora <= 1; contadora++) {

    do {
        Cd_cidade = Number(prompt("Digite o código da cidade"))
        if (Cd_cidade <= 0 || isNaN(Cd_cidade)) {
            alert(`Código: ${Cd_cidade} inválido`)
        }

    } while (Cd_cidade <= 0 || isNaN(Cd_cidade))

    do {
        N_veiculos_passeio = Number(prompt("Digite o número de veículos de passeio"))
        if (N_veiculos_passeio <= 0 || isNaN(N_veiculos_passeio)) {
            alert(`Código: ${N_veiculos_passeio} inválido`)
        }

    } while (N_veiculos_passeio <= 0 || isNaN(N_veiculos_passeio))

    do {
        N_acidentes = Number(prompt("Digite o número de acidente de transito"))
        if (N_acidentes <= 0 || isNaN(N_acidentes)) {
            alert(`Código: ${N_acidentes} inválido`)
        }

    } while (N_acidentes <= 0 || isNaN(N_acidentes))

    document.write(`Cidade: ${Cd_cidade}, Veículos: ${N_veiculos_passeio}, Acidentes: ${N_acidentes} <br>`)

    if (contadora === 1) {
        Maior_Acidentes = N_acidentes
        Cidade_Mais_Acidentes = Cd_cidade
        Menor_Acidentes = N_acidentes
        Cidade_Menos_Acidentes = Cd_cidade
    } else {
        if (N_acidentes > Maior_Acidentes) {
            Maior_Acidentes = N_acidentes
            Cidade_Mais_Acidentes = Cd_cidade
        }

        if (N_acidentes < Menor_Acidentes) {
            Menor_Acidentes = N_acidentes
            Cidade_Menos_Acidentes = Cd_cidade
        }

    }

    Soma_Veiculos_Passeio = Soma_Veiculos_Passeio + N_veiculos_passeio

    if (N_veiculos_passeio < 2000) {
        Soma_Acidentes_menos_2000_V += N_veiculos_passeio
        Contador_Cidade_Menos_2000_V++

    }
}

document.write(`Cidade com mais acidentes: ${Cidade_Mais_Acidentes}, Acidentes: ${Maior_Acidentes}`)
document.write(`Cidade com menos acidentes: ${Cidade_Menos_Acidentes}, Acidentes: ${Menor_Acidentes}`)
media_veiculos_passeio = Soma_Veiculos_Passeio / 5

if (Contador_Cidade_Menos_2000_V === 0) {
    document.write(`<p>Nenhuma cidade tem menos de 2000 veiculos</p>`)
} else {
    media_Acidentes_menos_2000_V = Soma_Acidentes_menos_2000_V / Contador_Cidade_Menos_2000_V
    document.write(`<p>Média de acidentes nas cidades com menos de 2000 veículos ${media_Acidentes_menos_2000_V}</p>`)
}