
function speakG(){
    console.log(this.som)
}

let dog = {
    som: "Au Au",
    speak: speakG
}

let cat = {
    som: "Miau",
    speak: speakG
}

dog.speak()
cat.speak()

let bindF = speakG.bind(dog)

bindF()