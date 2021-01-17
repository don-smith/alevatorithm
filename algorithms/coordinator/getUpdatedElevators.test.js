import getUpdatedElevators from './getUpdatedElevators'

test('will stay still with no passengers in elevator or waiting', () => {
  const elevators = [{
    id: 1,
    floor: 3,
    direction: 0,
    doorsOpen: false
  }]
  const passengers = []
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(3)
  expect(updated.direction).toBe(0)
  expect(updated.doorsOpen).toBeFalsy()

})

test('will open doors to let a new passenger board', () => {
  const elevators = [{
    id: 1,
    floor: 3,
    direction: 1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 3,
    destination: 0,
    inElevator: 0,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(3)
  expect(updated.direction).toBe(1)
  expect(updated.doorsOpen).toBeTruthy()
})

test('will open doors to let a passenger exit', () => {
  const elevators = [{
    id: 1,
    floor: 3,
    direction: 1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: 1,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(3)
  expect(updated.direction).toBe(1)
  expect(updated.doorsOpen).toBeTruthy()
})

test('will go up with a passenger inside', () => {
  const elevators = [{
    id: 1,
    floor: 2,
    direction: 1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 1,
    destination: 4,
    inElevator: 1,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(3)
  expect(updated.direction).toBe(1)
  expect(updated.doorsOpen).toBeFalsy()
})

test('will go down with passenger inside', () => {
  const elevators = [{
    id: 1,
    floor: 3,
    direction: -1,
    doorsOpen: false
  }]
  const passengers = [{
    source: 4,
    destination: 0,
    inElevator: 1,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(2)
  expect(updated.direction).toBe(-1)
  expect(updated.doorsOpen).toBeFalsy()
})

test('will go up to get a new passenger', () => {
  const elevators = [{
    id: 1,
    floor: 1,
    direction: 0,
    doorsOpen: false
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: 0,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(2)
  expect(updated.direction).toBe(1)
  expect(updated.doorsOpen).toBeFalsy()
})

test('will go down to get a new passenger', () => {
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 0,
    doorsOpen: false
  }]
  const passengers = [{
    source: 3,
    destination: 0,
    inElevator: 0,
    arrived: false
  }]
  const building = {
    numberOfLevels: 5,
    numberOfSublevels: 1
  }

  const updated = getUpdatedElevators(elevators, passengers, building)[0]

  expect(updated.floor).toBe(4)
  expect(updated.direction).toBe(-1)
  expect(updated.doorsOpen).toBeFalsy()
})
