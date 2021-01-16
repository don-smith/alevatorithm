import createPassenger from './createPassenger'

test('source and destination are inside building', () => {
  const building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const passenger = createPassenger(building)

  if (passenger.direction > 0) {
    // going up
    expect(passenger.source).toBeLessThanOrEqual(0)
    expect(passenger.source).toBeGreaterThanOrEqual(building.numberOfSublevels * -1)
    expect(passenger.destination).toBeGreaterThanOrEqual(0)
    expect(passenger.destination).toBeLessThanOrEqual(building.numberOfLevels)
  } else {
    // going down
    expect(passenger.source).toBeGreaterThanOrEqual(0)
    expect(passenger.source).toBeLessThanOrEqual(building.numberOfLevels)
    expect(passenger.destination).toBeLessThanOrEqual(0)
    expect(passenger.destination).toBeGreaterThanOrEqual(building.numberOfSublevels * -1)
  }
})

test('source and destination are different', () => {
  const building = {
    elevatorCount: 1,
    numberOfLevels: 2,
    numberOfSublevels: 2
  }
  const passenger = createPassenger(building)

  let count = 15
  while (count > 0) {
    // try a bunch of times since it's random
    expect(passenger.source).not.toBe(passenger.destination)
    count--
  }
})
