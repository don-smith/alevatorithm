import { constructElevators } from './building'

test('will construct elevators', () => {
  const building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [ 0, 7 ]
  }

  const elevators = constructElevators(building)

  expect(elevators).toHaveLength(building.elevatorCount)
  expect(elevators[0].waitFloor).toBe(building.waitFloors[0])
  expect(elevators[1].waitFloor).toBe(building.waitFloors[1])
})

test('will throw when elevatorCount and waitFloors do not match', () => {
  const building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [ 7 ],
  }

  expect(() => {
    constructElevators(building)
  }).toThrow()
})
