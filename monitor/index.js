let progress = 0
let totalArrived = 0
let totalWaitTime = 0
let totalTravelTime = 0

export function showStatus (elevators, passengers, totalIterations) {
  showDetails(elevators, passengers)
  progress += 1
  if (progress > totalIterations) {
    showArrivalTimes(passengers)
    let passengerCount = passengers.length
    let avgWait = Math.ceil(totalWaitTime / totalArrived)
    let avgTravel = Math.ceil(totalTravelTime / totalArrived)
    console.log(`${totalArrived} of ${passengerCount} passengers arrived in ${totalIterations} cycles`)
    console.log(`average wait time: ${avgWait}, average travel time: ${avgTravel}`)
    return true
  }
}

function showArrivalTimes (passengers) {
  totalArrived = 0
  passengers.forEach((passenger) => {
    if (passenger.arrived) {
      totalArrived += 1
      let wait = passenger.waitTime
      let travel = passenger.travelTime
      let source = passenger.source
      let destination = passenger.destination
      totalWaitTime += wait
      totalTravelTime += travel
      console.log(`Arrival source: ${source}, destination: ${destination}, wait: ${wait}, travel: ${travel}`)
    }
  })
}

function showDetails (elevators, passengers) {
  elevators.forEach((elevator) => {
    let id = elevator.id
    let floor = elevator.floor
    let direction = elevator.direction
    console.log(`Floor id: ${id} floor: ${floor} direction: ${direction}`)
    passengers.forEach((passenger) => {
      if (passenger.inElevator === elevator.id) {
        let source = passenger.source
        let destination = passenger.destination
        console.log(`  Passenger source: ${source} destination: ${destination}`)
      }
    })
  })
  console.log('Waiting passengers:')
  passengers.forEach((passenger) => {
    if (!passenger.arrived && passenger.inElevator === false) {
      let source = passenger.source
      let destination = passenger.destination
      console.log(`  Passenger source: ${source} destination: ${destination}`)
    }
  })
  process.stdout.write('--------------- \n \n')
}

