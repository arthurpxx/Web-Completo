let usuarios = ["Arthur", "Suellen","Mario"]

function inUsuario(nome,callback){

    setTimeout(()=>{
        usuarios.push(nome)
        callback
    })
}

function liUsuario(){
    console.log(usuarios)
}

inUsuario("Arthur", liUsuario)