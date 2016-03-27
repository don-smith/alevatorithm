/**
 * UpdatePassengers module.
 * @module update-passengers
 */

export default function updatePassengers (elevators, passengers) {
  let exitIndices = []
  let updatedPassengers = []
  passengers.forEach((passenger, passengerIndex) => {
    elevators.forEach((elevator, elevatorIndex) => {
      // let passengers exit elevators
      if (passenger.inElevator === elevator.id &&
        passenger.destination === elevator.floor) {
        exitIndices.push(passengerIndex)
      }

      // let passengers enter elevators
      if (passenger.inElevator === false &&
        passenger.source === elevator.floor) {
        passengers[passengerIndex].inElevator = elevator.id
      }
    })
  })
  updatedPassengers = passengers.filter((passenger, passengerIndex) => {
    let hasExited = false
    exitIndices.forEach((exitIndex) => {
      hasExited = hasExited || passengerIndex === exitIndex
    })
    return !hasExited
  })
  // console.log('updatedPassengers count', updatedPassengers.length)
  return updatedPassengers
}
