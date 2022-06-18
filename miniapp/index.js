let departureDateEntry = prompt("Digite qual é a data de partida formato DD/MM/YYYY")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n 4- Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = math.round(dateDiff / 1000)
    alert("Tempo de voo: " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2") {
    let minutesOfDeparture = math.round(dateDiff / 1000 / 60)
    alert("Tempo de voo: " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3") {
    let hoursOfDeparture = math.round(dateDiff / 1000 / 3600)
    alert("Tempo de voo: " + hoursOfDeparture + " horas")
} else if(chosenOption == "4") {
    let daysOfDeparture = math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de voo: " + daysOfDeparture + " dias")
} else {
    alert("Opção Invalida")
}