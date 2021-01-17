import { constructElevators } from '.'

test('constructs elevators', () => {
  const building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2
  }

  const elevators = constructElevators(building)

  expect(elevators).toHaveLength(building.elevatorCount)
})
