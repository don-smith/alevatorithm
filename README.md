# Alevatorithm

Various elevator algorithms complete with a passenger load simulator and activity monitor for measuring efficiency.

## Requirements

- Node.js 18.x or higher
- npm 8.x or higher

## Installation

```bash
npm install
```

## Running a simulation

1. Decide which algorithm you want to run (details below):
   - Independent
2. Call the associated script. For example:

```bash
npm run independent
```

## Development

### Available Scripts

- `npm test` - Run all unit tests
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Automatically fix linting errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly

### Testing

The project uses Jest for testing. All tests are located alongside their respective modules with a `.test.js` suffix.

```bash
npm test
```

## Algorithms

One of the primary curiosities of this project is to write and evaluate the efficiencies of various algorithms that control elevators. In this context, _efficiency_ means reducing both the amount of time a passenger must wait to board an elevator and how long they must be inside the elevator.

### Independent

This algorithm was the first and it's not at all optimised. In this implementation each elevator operates completely independently with no consideration for the state of the other elevators. This causes all elevators to respond to a single passenger, which is one of the main behaviours that will improve efficiency in other algorithms. Perhaps a coordinator or shared queue would be more efficient. That said, this does work and the tests pass.

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

## Technology Stack

- **Runtime**: Node.js (ES Modules)
- **Testing**: Jest
- **Linting**: ESLint 9 (flat config)
- **Formatting**: Prettier
- **CI/CD**: GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting: `npm test && npm run lint`
5. Format your code: `npm run format`
6. Submit a pull request

All pull requests are automatically checked by CI for tests, linting, and formatting.
