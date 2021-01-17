export function getNewElevatorState(elevators, passengers) {
  return elevators.map((elevator) => {
    const {id, floor} = elevator

    // When no passengers are in elevator and no passengers are waiting
    const areWaiting = passengersAreWaiting(passengers)
    const hasPassengers = elevatorHasPassengers(id, passengers)
    if (!areWaiting && !hasPassengers) return {
      ...elevator,
      direction: 0,
      doorsOpen: false
    }

    // When picking up or dropping off passengers
    const pickingUp = isPickingUpPassenger(elevator, passengers)
    const droppingOff = isDroppingOffPassenger(elevator, passengers)
    if (pickingUp || droppingOff) return {
      ...elevator,
      doorsOpen: true
      // leaving direction alone, for now
      // floor should not change on this cycle
    }

    // When taking existing passengers to their next floor
    if (hasPassengers) {
      const {floor} = elevator
      const {destination} = getElevatorPassengers(id, passengers)[0]
      const directionAndNextFloor = getDirectionAndNextFloor(floor, destination)
      return {
        ...elevator,
        ...directionAndNextFloor,
        doorsOpen: false
      }
    }

    // When picking up new passengers who are waiting
    if (areWaiting) {
      const {source} = getWaitingPassengers(passengers)[0]
      const directionAndNextFloor = getDirectionAndNextFloor(floor, source)
      return {
        ...elevator,
        ...directionAndNextFloor,
        doorsOpen: false
      }
    }

    console.error("Whoa! What's going on? You shouldn't be here!")
  })
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

function getWaitingPassengers (passengers) {
  return passengers.filter(passenger => passenger.inElevator === 0 && !passenger.arrived)
}

function passengersAreWaiting (passengers) {
  const waitingPassengers = getWaitingPassengers(passengers)
  return waitingPassengers.length > 0
}

function isPickingUpPassenger (elevator, passengers) {
  return passengers.some(({arrived, inElevator, source}) => {
    return !arrived && inElevator === 0 && source === elevator.floor
  })
}

function isDroppingOffPassenger (elevator, passengers) {
  const {id, floor} = elevator
  return passengers.some(({arrived, inElevator, destination}) => {
    return !arrived && inElevator === id && destination === floor
  })
}

function getDirectionAndNextFloor (currentFloor, target) {
  const direction = target > currentFloor ? 1 : -1
  return {
    direction: direction,
    floor: direction === 1 ? currentFloor + 1 : currentFloor - 1
  }
}
