/**
 * GetUpdatedPassengers module.
 * @module getUpdatedPassengers
 */

export default function getUpdatedPassengers (passengers, elevators) {
  return passengers.map((passenger) => {
    const currentPassenger = {...passenger}
    const {arrived, inElevator, source, destination} = currentPassenger

    // Don't alter a passenger that's already arrived
    if (arrived) return currentPassenger

    // Update passengers boarding and exiting elevators
    elevators.forEach(({id, floor, doorsOpen}) => {
      // passenger is boarding
      if (inElevator === 0 && source === floor && doorsOpen) {
        currentPassenger.inElevator = id
      }

      // passenger is exiting
      if (inElevator === id && destination === floor && doorsOpen) {
        currentPassenger.inElevator = 0
        currentPassenger.arrived = true
      }
    })

    // Increment arrival times
    if (currentPassenger.inElevator === 0 && !currentPassenger.arrived) {
      currentPassenger.waitTime += 1
    } else {
      currentPassenger.travelTime += 1
    }

    return currentPassenger
  })
}
