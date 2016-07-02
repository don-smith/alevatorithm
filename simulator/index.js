import createNewPassengers from './create-new-passengers'

export function runSimulation (building, elevators, algorithm, options, monitor) {
  let passengers = []
  let simulationInterval = setInterval(runIteration, 50)

  function runIteration () {
    passengers = createNewPassengers(passengers, options.passengerLoad, building)
    elevators = algorithm.updateElevators(building, elevators, passengers)
    passengers = algorithm.updatePassengers(elevators, passengers)

    if (monitor && monitor(elevators, passengers, options.totalIterations)) {
      clearInterval(simulationInterval)
    }
  }
}

