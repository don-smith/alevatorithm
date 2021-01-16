import { getByName } from './algorithms/getByName'
import { constructElevators } from './building'
import { runSimulation } from './simulator'
import { showStatus } from './monitor'

const building = {
  elevatorCount: 2,
  numberOfLevels: 13,
  numberOfSublevels: 2
}

const algorithmChoice = process.argv[2]
const algorithm = getByName(algorithmChoice)
const elevators = constructElevators(building)

const options = {
  passengerLoad: 2,
  totalIterations: 50 // rename to simulationCycles
}

runSimulation(building, elevators, algorithm, options, showStatus)
