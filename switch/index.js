let distance = prompt("Qual é a distancia de anos luz?")

let chosenOption = prompt("Qual opção gostaria de escolher?\n1- Parsec(PC)\n2- Unidade Astronômica(AU)\n3- Quilômetros (km)\n\n (Digite o número da opção desejada)")

let chosenUnity
let chosenDistance

switch (chosenOption) {
        case "1":
            chosenUnity = "Parsec"
            convertedDistance = distance = 0.306601
            break
        case "2":
            chosenUnity = "Unidade Astronômica"
            convertedDistance = distance = 63241.1
            break
        case "3":
            chosenUnity = "Quilômetros"
            convertedDistance = distance * 9.5 * Math.pow(10,12)
            break
        default:
            chosenUnity = "Unidade nao identificada"
            convertedDistance = "Conversão fora do escopo"
}

alert("Distancia em anos luz: " + distance + "\n" + chosenUnity + ": " + convertedDistance)