export default function updateElevators (building, elevators, passengers) {
  let updatedElevators = advanceFloor(building, elevators, passengers)
  return updatedElevators
}

function advanceFloor (building, elevators, passengers) {
  return elevators.map((elevator) => {
    let nextFloor = getNextFloor(building, elevator, passengers)
    return {
      floor: nextFloor,
      waitFloor: elevator.waitFloor,
      direction: elevator.direction
    }
  })
}

function getNextFloor (building, elevator, passengers) {
  let floor = elevator.floor
  if (elevator.direction === 0) {
    if (!passengers.length) {
      if (floor > elevator.waitFloor) {
        return floor - 1
      } else if (floor < elevator.waitFloor) {
        return floor + 1
      } else {
        return floor
      }
    } else {
      let passengerFloor = getPassengerFloor(passengers, floor)
      if (passengerFloor > floor) {
        return floor + 1
      } else if (passengerFloor < floor) {
        return floor - 1
      } else {
        return floor
      }
    }
  } else if (elevator.direction === 1) {
    if (floor === building.numberOfLevels) return floor
    return floor + 1
  } else {
    if (floor === building.numberOfSublevels * -1) return floor
    return floor - 1
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
