import test from 'ava'
import 'babel-register'
import { constructElevators } from '../lib/building'

test('will construct elevators', (t) => {
  let building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [0, 7]
  }

  let elevators = constructElevators(building)

  t.is(elevators.length, building.elevatorCount)
  t.is(elevators[0].waitFloor, building.waitFloors[0])
  t.is(elevators[1].waitFloor, building.waitFloors[1])
})

test('will throw when elevatorCount and waitFloors do not match', (t) => {
  let building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [7]
  }

  t.throws(() => {
    constructElevators(building)
  })
})
