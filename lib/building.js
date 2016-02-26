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
 */
export default {
  elevatorCount: 2,
  numberOfLevels: 13,
  numberOfSublevels: 2,
  waitFloors: [0, 7]
}
