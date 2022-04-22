//metodo construtor quando for passar a função na variavel TURMA, só chamar a função CRIARALUNO e passar os argumentos, para criar um novo aluno
function criarAluno(nome,n1,n2){
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function(){
      return (this.nota1 + this.nota2) / 2
    }
  }
}
var turma = [
  criarAluno("Arthur", 8, 5),
  criarAluno("Suellen", 9, 9),
  criarAluno("Ana", 6.5, 7)
]


var aluno = turma[1]

for(var aluno of turma){
  console.log(aluno.nome + " - " + aluno.media())
}