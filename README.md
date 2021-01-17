# Alevatorithm

Various elevator algorithms complete with a passenger load simulator and activity monitor for measuring efficiency.

## Running a simulation

1. Decide which algorithm you want to run (details below):
   - Independent
   - Coordinator
2. Call the associated script. For example, `npm run independent`

`npm test` will run all unit tests.

## Algorithms

One of the primary curiosities of this project is to evaluate the efficiencies of various algorithms that control elevators. In this context, _efficiency_ means reducing both the amount of time a passenger must wait to enter an elevator and how long they must be inside the elevator before reaching their destination floor.

### Independent

This algorithm was the first and it's not at all optimised. In this implementation each elevator operates completely independently with no consideration for the state of the other elevators. This causes all elevators to respond to a single passenger, which is one of the main behaviours that will improve efficiency in other algorithms. Perhaps a coordinator or shared queue would be more efficient. That said, this does work and the tests pass.

### Coordinator

This algorithm uses a coordinator to direct each of the elevators rather than them operating independently of each other. **This algorithm is not yet finished.**

## Domain model

Building
- `elevatorCount`
- `numberOfLevels`
- `numberOfSublevels`

Elevator
- `id`
- `floor`
- `direction`
- `doorsOpen`

Passenger
- `source`
- `destination`
- `inElevator` (`0` while not inside or the id of the elevator once inside)
- `waitTime`
- `travelTime`

