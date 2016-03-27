import { constructElevators } from './lib/building'
import updateElevators from './lib/update-elevators'
import updatePassengers from './lib/update-passengers'
import createNewPassengers from './lib/create-new-passengers'

const building = {
  elevatorCount: 2,
  numberOfLevels: 13,
  numberOfSublevels: 2,
  waitFloors: [0, 7]
}
const passengerLoad = 2
const totalIterations = 40

let progress = 0
let passengers = [
  {
    source: 10,
    destination: 0,
    inElevator: false,
    direction: -1
  }
]
let elevators = constructElevators(building)
let simulationInterval = setInterval(runSimulation, 50)

function runSimulation () {
  passengers = createNewPassengers(passengers, passengerLoad, building)
  elevators = updateElevators(building, elevators, passengers)
  passengers = updatePassengers(elevators, passengers)
  manageProgress()
}

function manageProgress () {
  showStatus()
  progress += 1
  if (progress > totalIterations) {
    clearInterval(simulationInterval)
  }
}

function showStatus () {
  elevators.forEach((elevator) => {
    let id = elevator.id
    let floor = elevator.floor
    let direction = elevator.direction
    console.log(`Floor id: ${id} floor: ${floor} direction: ${direction}`)
    passengers.forEach((passenger) => {
      if (passenger.inElevator === elevator.id) {
        let source = passenger.source
        let destination = passenger.destination
        let inElevator = passenger.inElevator
        console.log(`  Passenger source: ${source} destination: ${destination} inElevator: ${inElevator}`)
      }
    })
  })
  console.log('Waiting passengers:')
  passengers.forEach((passenger) => {
    if (passenger.inElevator === false) {
      let source = passenger.source
      let destination = passenger.destination
      let inElevator = passenger.inElevator
      console.log(`  Passenger source: ${source} destination: ${destination} inElevator: ${inElevator}`)
    }
  })
  process.stdout.write('--------------- \n \n')
}
