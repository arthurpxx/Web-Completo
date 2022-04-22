function calcMedia(){
    //this é usando para referenciar objetos, podendo ser objetos diferentes
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome:"Arthur",
    notas: [9,7],
//media é um metodo do objeto
    media: calcMedia
}

var aluno1 = {
    nome:"Suellen",
    notas: [5,9],
//media é um metodo do objeto
    media: calcMedia
}

console.log(aluno.nome)
//esta chamando o metodo MEDIA e passando as propriedades NOTAS
console.log(aluno.media())

console.log(aluno1.nome)
//esta chamando o metodo MEDIA e passando as propriedades NOTAS
console.log(aluno1.media())