import createNewPassengers from './createNewPassengers'

test('number of passengers created does not exceed load', () => {
  const building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2
  }
  const passengerLoad = 10

  const newPassengers = createNewPassengers([], passengerLoad, building)

  expect(newPassengers.length).toBeLessThan(passengerLoad)
})
