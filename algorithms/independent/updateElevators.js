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
  return elevators.map((elevator) => {
    const {id, floor} = elevator
    const elevatorPassengers = getElevatorPassengers(id, passengers)

    // Don't update elevator's floor when letting passengers on or off
    if (doorsMustOpen(floor, passengers)) return {
      id: id,
      floor: floor,
      direction: 0
    }

    const nextFloor = getNextFloor(building, elevator, passengers)
    return {
      id: id,
      floor: nextFloor,
      direction: getDirection(elevator, nextFloor, elevatorPassengers, building)
    }
  })
}

function doorsMustOpen (floor, passengers) {
  // Open doors to let passengers on or off
  return passengers.some(({source, destination}) => {
    return source === floor || destination === floor
  })
}

function getDirection (elevator, nextFloor, passengers, building) {
  const {floor} = elevator
  if (floor === nextFloor && !passengers.length) return 0
  if (floor === nextFloor) {
    return getNextPassengerFloor(building, elevator, passengers)
  }
  return floor < nextFloor ? 1 : -1
}

function getNextFloor (building, elevator, passengers) {
  if (elevatorHasPassengers(elevator.id, passengers))
    return getNextPassengerFloor(building, elevator, passengers)

  if (passengerIsWaiting(passengers))
    return getFloorTowardsPassengerSource(building, elevator, passengers)

  return elevator.floor
}

function getElevatorPassengers (elevatorId, passengers) {
  return passengers.filter(
    passenger => passenger.inElevator === elevatorId,
  )
}

function elevatorHasPassengers (elevatorId, passengers) {
  const elevatorPassengers = getElevatorPassengers(elevatorId, passengers)
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

function nextFloor (elevator, building) {
  const { floor, direction } = elevator
  const { numberOfLevels: levels, numberOfSublevels: subLevels } = building

  if (direction === 1 && floor !== levels) return floor + 1
  if (direction === -1 && floor !== subLevels * -1) return floor - 1

  return floor
}
