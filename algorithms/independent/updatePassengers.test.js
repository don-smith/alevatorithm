import updatePassengers from './updatePassengers'

test('a passenger that has already arrived is not changed', () => {
  const elevators = [{
    id: 1,
    floor: 5,
    direction: 0
  }]
  const passengers = [{
    source: 0,
    destination: 3,
    inElevator: false,
    arrived: true,
    waitTime: 3,
    travelTime: 3
  }]

  const updated = updatePassengers(elevators, passengers)[0]

  expect(updated.source).toBe(0)
  expect(updated.destination).toBe(3)
  expect(updated.inElevator).toBe(false)
  expect(updated.arrived).toBe(true)
})

test.todo('an arriving passenger exits the elevator')
test.todo('an arriving passenger is marked as arrived')
test.todo('passengers can enter elevators')
test.todo('travel time is increased for passengers of an elevator')
test.todo('wait time is increased for passengers not in an elevator')
