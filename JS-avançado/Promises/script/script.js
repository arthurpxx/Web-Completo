let usuarios = ["Arthur", "Suellen", "Mario"]

function inUsuario(nome) {


  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome)
      let error = false
      if (!error) {
        resolve()
      } else {
        reject({ msg: "Erro de qualquer coisa" })
      }
    }, 1000)
  })
  return promise
}

function liUsuario() {
  console.log(usuarios)
}

inUsuario("Arthur").then(liUsuario)