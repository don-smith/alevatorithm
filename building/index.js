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
  for (let index = 0; index < building.elevatorCount; index++) {
    elevators.push({
      id: index,
      floor: 0,
      direction: 0
    })
  }
  return elevators
}
