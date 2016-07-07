Alevatorithm
====================

> An elevator algorithm

## This algorithm

This algorithm was the first and it's not at all optomised. In this implementation each elevator operates completely independently with no consideration for the state of the other elevators. This causes all elevators to respond to a single passenger, which is one of the conditions that could be optomised. Apparently a coordinator or shared queue would be better. That said, this does work and the tests pass.

## Domain model

Building
- elevatorCount
- numberOfLevels
- numberOfSublevels
- waitFloors (array of length elevatorCount)

Elevator
- id
- floor
- direction
- waitFloor

Passenger
- source
- destination
- inElevator (undefined, false or elevator index)
