/**
 * UpdateElevators module.
 * @module update-elevators
 */

/**
 * Updates the elevators
 * @param {object} building - the building specifications
 * @param {Array} elevators - the array of elevators
 * @param {Array} passengers - the array of passengers
 * @return {Array} the new array of elevators
 */
export default function updateElevators (building, elevators, passengers) {
  return elevators.map((elevator, index) => {
    const theNextFloor = getNextFloor(building, elevator, passengers)
    return {
      id: index,
      floor: theNextFloor,
      waitFloor: elevator.waitFloor,
      direction: getDirection(elevator.floor, theNextFloor)
    }
  })
}

function getDirection (elevatorFloor, nextFloor) {
  if (elevatorFloor === nextFloor) return 0
  return elevatorFloor < nextFloor ? 1 : -1
}

function getNextFloor (building, elevator, passengers) {
  if (elevatorHasPassengers(elevator, passengers))
    return getNextPassengerFloor(building, elevator, passengers)

  if (passengerIsWaiting(passengers))
    return getFloorTowardsPassengerSource(building, elevator, passengers)

  return getFloorTowardsWaitFloor(building, elevator)
}

function getElevatorPassengers (elevator, passengers) {
  return passengers.filter(
    passenger => passenger.inElevator === elevator.id,
  )
}

function elevatorHasPassengers (elevator, passengers) {
  const elevatorPassengers = getElevatorPassengers(elevator, passengers)
  return elevatorPassengers.length > 0
}

function getNextPassengerFloor (building, elevator, passengers) {
  const elevatorPassengers = getElevatorPassengers(elevator, passengers)
  const goingRightDirection = elevatorPassengers.some(
    passenger => elevator.direction === 1
      && elevator.floor < passenger.destination
      || elevator.direction === -1
      && elevator.floor > passenger.destination,
  )
  if (elevatorPassengers.length && !goingRightDirection)
    elevator.direction *= goingRightDirection ? 1 : -1

  return nextFloor(elevator, building)
}

function passengerIsWaiting (passengers) {
  const waitingPassengers = getWaitingPassengers(passengers)
  return waitingPassengers.length > 0
}

function getWaitingPassengers (passengers) {
  return passengers.filter(passenger => !passenger.inElevator && !passenger.arrived)
}

function getFloorTowardsPassengerSource (building, elevator, passengers) {
  const waitingPassengers = getWaitingPassengers(passengers)
  elevator.direction = waitingPassengers[0].source > elevator.floor ? 1 : -1
  return nextFloor(elevator, building)
}

function getFloorTowardsWaitFloor (building, elevator) {
  if (elevator.floor > elevator.waitFloor)
    elevator.direction = -1
  else if (elevator.floor < elevator.waitFloor)
    elevator.direction = 1
  else {
    elevator.direction = 0
    return elevator.floor
  }
  return nextFloor(elevator, building)
}

function nextFloor (elevator, building) {
  const { floor, direction } = elevator
  const { numberOfLevels: levels, numberOfSublevels: subLevels } = building

  let nextFloor = elevator.floor
  if (direction === 1 && floor !== levels) nextFloor = floor + 1
  if (direction === -1 && floor !== subLevels * -1) nextFloor = floor - 1

  return nextFloor
}
