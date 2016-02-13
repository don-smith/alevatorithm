import test from 'ava'
import 'babel-register'
import building from '../lib/building'
import createPassenger from '../lib/create-passenger'

test('create passenger', (t) => {
  let passenger = createPassenger(building)
  if (passenger.direction > 0) {
    t.ok(passenger.source <= 0)
    t.ok(passenger.destination > 0)
  } else {
    t.ok(passenger.source > 0)
    t.ok(passenger.destination <= 0)
  }
})
