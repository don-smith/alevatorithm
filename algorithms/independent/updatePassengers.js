/**
 * UpdatePassengers module.
 * @module update-passengers
 */

export default function updatePassengers (elevators, passengers) {
  return passengers.map((passenger) => {
    const {arrived, inElevator, source, destination} = passenger
    if (arrived) {
      return passenger
    }

    elevators.forEach((elevator) => {
      // let passengers exit elevators
      if (inElevator === elevator.id &&
        destination === elevator.floor) {
        arrived = true
        inElevator = false
      }

      // let passengers enter elevators
      if (inElevator === false &&
        source === elevator.floor) {
        inElevator = elevator.id
      }
    })

    // increment arrival times
    if (inElevator === false) {
      passenger.waitTime += 1
    } else {
      passenger.travelTime += 1
    }

    return passenger
  })
}
