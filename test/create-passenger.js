import test from 'ava'
import 'babel-register'
import createPassenger from '../lib/create-passenger'

test('source and destination are inside building', (t) => {
  let building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [0, 7]
  }
  let passenger = createPassenger(building)

  if (passenger.direction > 0) {
    // going up
    t.truthy(passenger.source <= 0)
    t.truthy(passenger.source >= building.numberOfSublevels * -1)
    t.truthy(passenger.destination >= 0)
    t.truthy(passenger.destination <= building.numberOfLevels)
  } else {
    // going down
    t.truthy(passenger.source >= 0)
    t.truthy(passenger.source <= building.numberOfLevels)
    t.truthy(passenger.destination <= 0)
    t.truthy(passenger.destination >= building.numberOfSublevels * -1)
  }
})

test('source and destination are different', (t) => {
  let building = {
    elevatorCount: 1,
    numberOfLevels: 2,
    numberOfSublevels: 2,
    waitFloors: [0, 0]
  }
  let passenger = createPassenger(building)

  let count = 15
  while (count > 0) {
    // try a bunch of times since it's random
    t.truthy(passenger.source !== passenger.destination)
    count--
  }
})
