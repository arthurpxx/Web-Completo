// Carne - 400g por pessoa + 6 horas - 650g
// Cerveja - 1200ml por pessoa + 6 horas 2000ml
// Refrigerante - 1000ml por pessoa + 6 horas 1500ml
// Criança valem por 0,5

let inputAdulto = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando");

    let adulto = inputAdulto.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adulto + (carnePP(duracao) / 2 * crianca)
    let qtdTotalCerveja = cervejaPP(duracao) * adulto
    let qtdTotalBebida = bebidaPP(duracao) * adulto + (bebidaPP(duracao) / 2 * crianca);
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}