let totalArrived = 0
let totalWaitTime = 0
let totalTravelTime = 0

export function showCycle (elevators, passengers) {
  elevators.forEach(({id, floor, direction}) => {
    const directionText = getDirectionText(direction)
    console.log(`Elevator ${id} is on floor ${floor} ${directionText}`)
    passengers.forEach(({source, destination, inElevator}) => {
      if (inElevator === id) {
        console.log(`  Passenger going from floor ${source} to ${destination}`)
      }
    })
  })
  console.log('Waiting passengers:')
  passengers.forEach(({arrived, inElevator, source, destination}) => {
    if (!arrived && inElevator === false) {
      console.log(`  Passenger going from floor ${source} to ${destination}`)
    }
  })
  process.stdout.write('--------------- \n \n')
}

export function showSummary (elevators, passengers, totalIterations) {
  showArrivalTimes(passengers)
  process.stdout.write('--------------- \n')
  let passengerCount = passengers.length
  let avgWait = Math.ceil(totalWaitTime / totalArrived)
  let avgTravel = Math.ceil(totalTravelTime / totalArrived)
  console.log(`${totalArrived} of ${passengerCount} passengers arrived in ${totalIterations} cycles`)
  console.log(`Average wait time: ${avgWait} cycles`)
  console.log(`Average travel time: ${avgTravel} cycles`)
}

function showArrivalTimes (passengers) {
  totalArrived = 0
  passengers.forEach(({arrived, waitTime, travelTime, source, destination}) => {
    if (arrived) {
      totalArrived += 1
      totalWaitTime += waitTime
      totalTravelTime += travelTime
      console.log(`Arrival from ${source} to ${destination} (wait: ${waitTime}, travel: ${travelTime})`)
    }
  })
}

function getDirectionText (direction) {
  switch (direction) {
    case -1:
      return 'going down'
    case 1:
      return 'going up'
    default:
      return 'not moving'
  }
}
