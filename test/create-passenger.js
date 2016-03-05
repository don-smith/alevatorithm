import test from 'ava'
import 'babel-register'
import createPassenger from '../lib/create-passenger'

test('create passenger', (t) => {
  let building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [0, 7]
  }
  let passenger = createPassenger(building)

  if (passenger.direction > 0) {
    t.ok(passenger.source <= 0)
    t.ok(passenger.destination > 0)
  } else {
    t.ok(passenger.source > 0)
    t.ok(passenger.destination <= 0)
  }
})
