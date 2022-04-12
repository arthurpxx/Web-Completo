// && 
// ||
// negativo 

var idade = 35

var maior20 = idade >= 20
var menor30 = idade <= 30

var entre = maior20 && menor30

console.log("Entre", entre)


var idade1 = 9

var menor10 = idade1 > 10
var maior60 = idade1 < 60

var gratuidade = menor10 || maior60

console.log("tem direito a gratuidade?", idade1)