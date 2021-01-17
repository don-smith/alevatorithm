import { makeCoordinator } from './coordinator'

/**
 * GetUpdatedElevators module.
 * @module getUpdatedElevators
 */

/**
 * Updates the elevators
 * @param {object} building - the building specifications
 * @param {Array} elevators - the array of elevators
 * @param {Array} passengers - the array of passengers
 * @return {Array} the new array of elevators
 */
export default function getUpdatedElevators (elevators, passengers, building) {
  const coordinator = makeCoordinator(building)
  return coordinator.getNewElevatorState(elevators, passengers)
}
