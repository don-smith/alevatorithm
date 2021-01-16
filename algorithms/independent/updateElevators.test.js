import updateElevators from './updateElevators'

test('will go up a floor with a passenger inside', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 1
  }]
  const passengers = [{
    source: 1,
    destination: 7,
    inElevator: 1,
    direction: 1,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(6)
})

test('will go down a floor with passenger inside', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    id: 1,
    floor: 5,
    direction: -1
  }]
  const passengers = [{
    source: 9,
    destination: 0,
    inElevator: 1,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(4)
})

test('will go up to get a new passenger', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    id: 1,
    floor: 1,
    direction: 0
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: false,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(2)
  expect(updated.direction).toBe(1)
})

test('will go down to get a new passenger', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    floor: 7,
    direction: 0
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: false,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(6)
  expect(updated.direction).toBe(-1)
})

test('will open doors to let a new passenger board', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 1
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: false,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(5)
  expect(updated.direction).toBe(0)
})

test('will open doors to let a passenger disembark', () => {
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 1
  }]
  const passengers = [{
    source: 0,
    destination: 5,
    inElevator: 1,
    arrived: false
  }]

  const updated = updateElevators(building, elevators, passengers)[0]

  expect(updated.floor).toBe(5)
  expect(updated.direction).toBe(0)
})
