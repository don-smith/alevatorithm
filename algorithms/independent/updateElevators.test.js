import updateElevators from './updateElevators'

test('will stay on wait floor with no passenger inside', () => {
  const floor = 5
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    floor: floor,
    direction: 0
  }]
  const passengers = []
  const newElevators = updateElevators(building, elevators, passengers)
  expect(newElevators[0].floor).toBe(floor)
})

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

  const newElevators = updateElevators(building, elevators, passengers)

  expect(newElevators[0].floor).toBe(6)
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
    direction: -1,
    arrived: false
  }]

  const newElevators = updateElevators(building, elevators, passengers)

  expect(newElevators[0].floor).toBe(4)
})

test('will change direction with passenger inside', () => {
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
    inElevator: 1,
    direction: -1,
    arrived: false
  }]

  let newElevators = updateElevators(building, elevators, passengers)

  expect(newElevators[0].direction).toBe(-1)
  expect(newElevators[0].floor).toBe(4)
})

test('will go up to new passenger', () => {
  const floor = 1
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    floor: floor,
    direction: 0
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: false,
    arrived: false
  }]

  const newElevators = updateElevators(building, elevators, passengers)

  expect(newElevators[0].floor).toBe(2)
})

test('will go down to new passenger', () => {
  const floor = 7
  const building = {
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const elevators = [{
    floor: floor,
    direction: 0
  }]
  const passengers = [{
    source: 5,
    destination: 0,
    inElevator: false,
    arrived: false
  }]

  const newElevators = updateElevators(building, elevators, passengers)

  expect(newElevators[0].floor).toBe(6)
})
