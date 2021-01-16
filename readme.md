# Alevatorithm

Various elevator algorithms complete with a passenger load simulator and activity monitor for measuring efficiency.

## Running a simulation



## Domain model

Building
- `elevatorCount`
- `numberOfLevels`
- `numberOfSublevels`
- `waitFloors` (array of length `elevatorCount`)

Elevator
- `id`
- `floor`
- `direction`
- `waitFloor`

Passenger
- `source`
- `destination`
- `inElevator` (`undefined`, `false` or the index of an elevator)

## Algorithms

One of the primary curiosities of this project is to write and evaluate the efficiencies of various algorithms that control elevators. In this context, _efficiency_ means reducing both the amount of time a passenger must wait to board an elevator and how long they must be inside the elevator.

### Independent

This algorithm was the first and it's not at all optimised. In this implementation each elevator operates completely independently with no consideration for the state of the other elevators. This causes all elevators to respond to a single passenger, which is one of the main behaviours that will improve efficiency in other algorithms. Perhaps a coordinator or shared queue would be more efficient. That said, this does work and the tests pass.

