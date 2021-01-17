import getUpdatedPassengers from './getUpdatedPassengers'

test('a passenger that has already arrived is not changed', () => {
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 0,
    doorsOpen: true
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: 0,
    arrived: true,
    waitTime: 3,
    travelTime: 3
  }]

  const updated = getUpdatedPassengers(passengers, elevators)[0]

  expect(updated.source).toBe(0)
  expect(updated.destination).toBe(3)
  expect(updated.inElevator).toBe(0)
  expect(updated.arrived).toBe(true)
})

test('an arriving passenger exits the elevator', () => {
  const elevators = [{
    id: 1,
    floor: 3,
    direction: 0,
    doorsOpen: true
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: 1,
    arrived: false,
    waitTime: 3,
    travelTime: 3
  }]

  const updated = getUpdatedPassengers(passengers, elevators)[0]

  expect(updated.source).toBe(0)
  expect(updated.destination).toBe(3)
  expect(updated.inElevator).toBe(0)
  expect(updated.arrived).toBe(true)
})

test('passengers can enter elevators', () => {
  const elevators = [{
    id: 1,
    floor: 0,
    direction: 0,
    doorsOpen: true
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: 0,
    arrived: false,
    waitTime: 3,
    travelTime: 3
  }]

  const updated = getUpdatedPassengers(passengers, elevators)[0]

  expect(updated.source).toBe(0)
  expect(updated.destination).toBe(3)
  expect(updated.inElevator).toBe(1)
  expect(updated.arrived).toBe(false)
})

test('travel time is increased for passengers on an elevator', () => {
  const elevators = [{
    id: 1,
    floor: 1,
    direction: 1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: 1,
    arrived: false,
    waitTime: 3,
    travelTime: 3
  }]

  const updated = getUpdatedPassengers(passengers, elevators)[0]

  expect(updated.source).toBe(0)
  expect(updated.destination).toBe(3)
  expect(updated.inElevator).toBe(1)
  expect(updated.arrived).toBe(false)
  expect(updated.travelTime).toBe(4)
})

test('wait time is increased for passengers waiting for an elevator', () => {
  const elevators = [{
    id: 1,
    floor: 4,
    direction: -1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 3,
    destination: 0,
    inElevator: 0,
    arrived: false,
    waitTime: 3,
    travelTime: 0
  }]

  const updated = getUpdatedPassengers(passengers, elevators)[0]

  expect(updated.source).toBe(3)
  expect(updated.destination).toBe(0)
  expect(updated.inElevator).toBe(0)
  expect(updated.arrived).toBe(false)
  expect(updated.waitTime).toBe(4)
})
