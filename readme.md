Elegorithm
====================

> An elevator algorithm ... because I was curious.

## Domain model

Config
- TimeMultiplier

Building
- NumberOfShafts
- NumberOfFloorsAbove
- NumberOfFloorsBelow
- TimeBetweenFloors
- OnOffBoardingTime
- PassengersPerHour

Shaft
- Direction: Up, Down, Stopped
- atFloor event
- Queue
- next()

Scheduler: manages the shaft queues
- schedule(source, destination)
 
Passenger
- Source
- Destination
- requestTime
- boardTime
- arriveTime
- requestFloor(floor) event
- exit event

floor = createRandomFloor
subFloor = createRandomSubFloor
createEnteringPassenger(floor)
createLeavingPassenger(subFloor)

passenger = createRandomPassenger()
  - determine if going in or out
  - getRandomFloor() or getRandomExit()

passenger.requestElevator()
  - set requestTime value
  - attach listener for the building.elevatorArrived event
    - set boardTime value
    - detach listener for the building.elevatorArrived event
    - attach listener for the elevator.atFloor event
    - if floor == destination, set arriveTime, detach listener

elevator[]
 - floor
 - direction
 - passenger[]






