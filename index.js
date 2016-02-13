import building from './lib/building'
import updateElevators from './lib/update-elevators'
import updatePassengers from './lib/update-passengers'
import getNewPassengers from './lib/get-new-passengers'

let progress = 0
let elevators = []
let passengers = []

const passengerLoad = 2
const totalIterations = 100
const simulationInterval = setInterval(runSimulation, 50)

function runSimulation () {
  passengers = getNewPassengers(passengers, passengerLoad)
  elevators = updateElevators(building, elevators, passengers)
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
