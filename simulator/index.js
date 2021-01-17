import { constructElevators } from '../building'
import createNewPassengers from './createNewPassengers'

export function runSimulation (building, algorithm, options, monitor) {
  let progress = 1
  let passengers = []
  let elevators = constructElevators(building)

  const { showCycle, showSummary } = monitor
  const { displayCycles, passengerLoad, totalIterations } = options
  const simulationInterval = setInterval(runIteration, 50)

  function runIteration () {
    passengers = createNewPassengers(passengers, passengerLoad, building)
    elevators = algorithm.getUpdatedElevators(elevators, passengers, building)
    passengers = algorithm.getUpdatedPassengers(passengers, elevators)

    if (displayCycles) showCycle(elevators, passengers)

    progress += 1
    if (progress > totalIterations) {
      showSummary(elevators, passengers, totalIterations)
      clearInterval(simulationInterval)
    }
  }
}

