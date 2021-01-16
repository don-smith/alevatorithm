import * as algorithm from './algorithm'
import { constructElevators } from './algorithm/building'
import { runSimulation } from './simulator'
import { showStatus } from './monitor'

const building = {
  elevatorCount: 2,
  numberOfLevels: 13,
  numberOfSublevels: 2,
  waitFloors: [0, 7]
}

const elevators = constructElevators(building)

const options = {
  passengerLoad: 2,
  totalIterations: 50
}

runSimulation(building, elevators, algorithm, options, showStatus)

