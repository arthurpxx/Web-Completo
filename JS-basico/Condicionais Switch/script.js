var nota1 = 9.0
var nota2 = 1.0

var media = (nota1 + nota2) / 2
var conceito = ""

if (media >= 8) {
    conceito = "Otimo"
}
else if (media >= 6.5) {
    conceito = "Bom"
}
else {
    conceito = "Regular"
}

console.log(media)
console.log(conceito)

switch(conceito){
    case "Otimo":
        console.log("Parabens!")
        break
    case "Bom":
        console.log("Bom trabalho!")
        break
    case "Regular":
        console.log("Ok, mas pode melhorar!")
        break
    default:
        console.log("Houve algum erro")
}