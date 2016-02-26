import building from './lib/building'
import updateElevators from './lib/update-elevators'
import updatePassengers from './lib/update-passengers'
import createNewPassengers from './lib/create-new-passengers'

let progress = 0
let elevators = []
let passengers = []

const passengerLoad = 2
const totalIterations = 100
const simulationInterval = setInterval(runSimulation, 50)

function runSimulation () {
  elevators = updateElevators(building, elevators, passengers)
  passengers = createNewPassengers(passengers, passengerLoad)
  passengers = updatePassengers(elevators, passengers)
  manageProgress()
}

function manageProgress () {
  // process.stdout.write('.')
  progress += 1
  if (progress > totalIterations) {
    clearInterval(simulationInterval)
  }
}
