Alevatorithm
====================

> An elevator algorithm in several different programming styles

## Various paradigms

* A functional approach using only core JavaScript (in progress)
* A functional approach using an exteral library like Ramda
* An object oriented approach with events
* A reactive approach with RxJS
* Using a state machine

## Domain model

Building
- elevatorCount
- numberOfLevels
- numberOfSublevels

Elevator
- floor
- direction
- waitFloor

Passenger
- source
- destination
- inElevator (undefined or elevator index)
