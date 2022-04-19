
// nome do aluno - nota 1 - nota 2 - media - aprovado/reprovado


var nomes = ["Arthur", "Suelle", "Mario"]
var notasA = [7.0, 9.5, 6.5]
var notasB = [7.0, 8.0, 5.0]

function media(n1,n2){
    return (n1 + n2) / 2
}


function passou(media){

    if (media >= 7){
        return "Aprovado"
    }
    else{
        return "Reprovado"
    }

}

for(var i in nomes){

    var nota1 = notasA[i]
    var nota2 = notasB[i]
    var m = media(nota1 , nota2)


    console.log(nomes[i] +
        " - " + 
        nota1 +
        " - " + 
        nota2 +
        " - " +
        m +
        " - " +
        passou(m))
}