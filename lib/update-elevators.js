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
    let nextFloor = getNextFloor(building, elevator, passengers)
    return {
      id: elevator.id,
      floor: nextFloor,
      waitFloor: elevator.waitFloor,
      direction: elevator.floor === nextFloor ? 0 : elevator.direction
    }
  })
}

function getNextFloor (building, elevator, passengers) {
  if (elevatorHasPassengers(elevator, passengers)) {
    return getFloorTowardsPassengerDestination(elevator, passengers)
  } else {
    if (passengerIsWaiting(elevator, passengers)) {
      return getFloorTowardsPassengerSource(elevator, passengers)
    } else {
      return getFloorTowardsWaitFloor(elevator, building)
    }
  }
}

function elevatorHasPassengers (elevator, passengers) {
  let hasPassengers = false
  passengers.forEach((passenger) => {
    hasPassengers = hasPassengers || passenger.inElevator === elevator.id
  })
  return hasPassengers
}

function getFloorTowardsPassengerDestination (elevator, passengers) {
  // get first passenger in this elevator
  passengers.forEach
  return 8
}

function passengerIsWaiting (elevator, passengers) {
  return passengers.length
}

function getFloorTowardsPassengerSource (elevator, passengers) {
  return 4
}

function getFloorTowardsWaitFloor (elevator, building) {
  if (elevator.floor === elevator.waitFloor) {
    elevator.direction = 0
    return elevator.floor
  }
  return nextFloor(elevator, building)
}

function nextFloor (elevator, building) {
  let floor = elevator.floor
  if (elevator.direction === 1 &&
    elevator.floor !== building.numberOfLevels) {
    floor = elevator.floor + 1
  }
  if (elevator.direction === -1 &&
    elevator.floor !== building.numberOfSublevels) {
    floor = elevator.floor - 1
  }
  return floor
}

/*
  if (passengers.length) {
    let passengerFloor = getPassengerFloor(passengers, floor)
    if (passengerFloor > floor) {
      return floor + 1
    } else if (passengerFloor < floor) {
      return floor - 1
    } else {
      return floor
    }
  } else { // no passengers
    if (floor > elevator.waitFloor) {
      return floor - 1
    } else if (floor < elevator.waitFloor) {
      return floor + 1
    } else {
      return floor
    }
  }
}

function getPassengerFloor (passengers, defaultFloor) {
  let floor = defaultFloor
  passengers.forEach((passenger) => {
    if (!passenger.inElevator) {
      floor = passenger.source
    }
  })
  return floor
}

function goingInTheRightDirection (elevator, passengers) {
  let isRightDirection = true
  passengers.forEach((passenger) => {
    if (elevator.direction === 1 && passenger.destination < elevator.floor) {
      isRightDirection = false
    }
    if (elevator.direction === -1 && passenger.destination > elevator.floor) {
      isRightDirection = false
    }
  })
  return isRightDirection
}
*/
