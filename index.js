import { getByName } from './algorithms/getByName'
import { constructElevators } from './building'
import { runSimulation } from './simulator'
import * as monitor from './monitor'

const building = {
  elevatorCount: 2,
  numberOfLevels: 13,
  numberOfSublevels: 2
}

const choice = process.argv[2]
const algorithm = getByName(choice)
const elevators = constructElevators(building)

const options = {
  passengerLoad: 2,
  totalIterations: 50,
  displayCycles: true
}

const {passengerLoad: load, totalIterations: total} = options
console.info(`Running the ${choice} algorithm with a load of ${load} for ${total} iterations.\n`)
runSimulation(building, elevators, algorithm, options, monitor)
