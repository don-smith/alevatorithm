/**
 * Building module.
 * @module building
 */

/**
 * @typedef {Object} building
 * {number} building.elevatorCount
 * {number} building.numberOfLevels
 * {number} building.numberOfSublevels
 * @returns {object[]} An array of elevator objects
 */
export function constructElevators (building) {
  let elevators = []
  for (let id = 1; id < building.elevatorCount + 1; id++) {
    elevators.push({
      id: id,
      floor: 0,
      direction: 0,
      doorsOpen: false
    })
  }
  return elevators
}
