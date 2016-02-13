import test from 'ava'
import 'babel-register'
import getNewPassengers from '../lib/get-new-passengers'

test('new requests', (t) => {
  let passengerLoad = 10
  let newPassengers = getNewPassengers([], passengerLoad)
  t.ok(newPassengers.length < passengerLoad)
})
