/**
 * UpdatePassengers module.
 * @module update-passengers
 */

export default function updatePassengers (elevators, passengers) {
  let updatedPassengers = passengers.map((passenger) => {
    if (passenger.arrived) {
      return passenger
    }

    elevators.forEach((elevator) => {
      // let passengers exit elevators
      if (passenger.inElevator === elevator.id &&
        passenger.destination === elevator.floor) {
        passenger.arrived = true
        passenger.inElevator = false
      }

      // let passengers enter elevators
      if (passenger.inElevator === false &&
        passenger.source === elevator.floor) {
        passenger.inElevator = elevator.id
      }
    })

    // increment arrival times
    if (passenger.inElevator === false) {
      passenger.waitTime += 1
    } else {
      passenger.travelTime += 1
    }

    return passenger
  })

  return updatedPassengers
}
