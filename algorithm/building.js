/**
 * Building module.
 * @module building
 */

/**
 * @typedef {Object} building
 * {number} building.elevatorCount
 * {number} building.numberOfLevels
 * {number} building.numberOfSublevels
 * {number[]} building.waitFloors
 * @returns {object[]} An array of elevator objects
 */
export function constructElevators (building) {
  ensureWaitFloorsMatchElevatorCount(building)
  let elevators = []
  for (let index = 0; index < building.elevatorCount; index++) {
    elevators.push({
      id: index,
      floor: 0,
      direction: 0,
      waitFloor: building.waitFloors[index]
    })
  }
  return elevators
}

function ensureWaitFloorsMatchElevatorCount (building) {
  if (building.elevatorCount !== building.waitFloors.length) {
    throw new Error('The length of the waitFloors property must match the elevatorCount')
  }
}
