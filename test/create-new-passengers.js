import test from 'ava'
import 'babel-register'
import createNewPassengers from '../lib/create-new-passengers'

test('new requests', (t) => {
  let building = {
    elevatorCount: 2,
    numberOfLevels: 13,
    numberOfSublevels: 2,
    waitFloors: [0, 7]
  }
  let passengerLoad = 10
  let newPassengers = createNewPassengers([], passengerLoad, building)
  t.truthy(newPassengers.length < passengerLoad)
})
