let pilotName = prompt("Qual seu nome meu bacana?")

let velocity = 0

let newVelocity = prompt("Qual velocidade gostaria de acelerar meu nobre amigo?")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <=0) {
    alert("você está parado considere acelerar")
} else if (velocity < 40) {
    alert("Está começando a acelerar")
} else if (velocity < 80) {
    alert("Está começando a acelerar rápido , diminua")
} else if (velocity < 100) {
    alert("Está muito rápido perigo")
} else {
    alert("Está muito rápido diminuía agora ")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")