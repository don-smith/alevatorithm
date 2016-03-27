Alevatorithm
====================

> An elevator algorithm

Eventually this will be written in several different programming styles.

## Various paradigms

* A functional(ish) approach using only vanilla ES6 JavaScript (in progress)
* A functional approach using an exteral library like Ramda
* An object oriented approach with events
* A reactive approach with RxJS
* Maybe using a state machine

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
