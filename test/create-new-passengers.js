import test from 'ava'
import 'babel-register'
import createNewPassengers from '../lib/create-new-passengers'

test('new requests', (t) => {
  let passengerLoad = 10
  let newPassengers = createNewPassengers([], passengerLoad)
  t.ok(newPassengers.length < passengerLoad)
})
