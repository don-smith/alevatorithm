import createNewPassengers from './createNewPassengers'

export function runSimulation (building, elevators, algorithm, options, monitor) {
  let progress = 1
  let passengers = []
  const { showCycle, showSummary } = monitor
  const { displayCycles, passengerLoad, totalIterations } = options

  const simulationInterval = setInterval(runIteration, 50)

  function runIteration () {
    passengers = createNewPassengers(passengers, passengerLoad, building)
    elevators = algorithm.updateElevators(building, elevators, passengers)
    passengers = algorithm.updatePassengers(elevators, passengers)

    if (displayCycles) showCycle(elevators, passengers)

    progress += 1
    if (progress > totalIterations) {
      showSummary(elevators, passengers, totalIterations)
      clearInterval(simulationInterval)
    }
  }
}

