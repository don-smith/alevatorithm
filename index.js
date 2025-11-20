import { getByName } from './algorithms/getByName.js'
import { runSimulation } from './simulator/index.js'
import * as monitor from './monitor/index.js'

const building = {
  elevatorCount: 2,
  numberOfLevels: 6,
  numberOfSublevels: 2,
}

const choice = process.argv[2]
const algorithm = getByName(choice)

const options = {
  passengerLoad: 2,
  totalIterations: 40,
  displayCycles: true,
}

const { passengerLoad: load, totalIterations: total } = options
console.info(`Running the ${choice} algorithm with a load of ${load} for ${total} iterations.\n`)

runSimulation(building, algorithm, options, monitor)
