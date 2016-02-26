/**
 * CreatePassenger Module.
 * @module create-passenger
 */

/**
 * Returns a new random passenger
 * @param {building} building - the building specifications
 * @returns {passenger} - a new random passenger
 * @see module:building
 */
export default function createPassenger (building) {
  let direction = getDirection()
  let highFloor = getHighFloor(building.numberOfLevels)
  let lowFloor = getLowFloor(building.numberOfSublevels)

  /**
   * @typedef {Object} passenger
   * {boolean} passenger.inElevator
   * {number} passenger.direction
   * {number} passenger.source
   * {number} passenger.destination
   */
  return {
    inElevator: false,
    direction: direction,
    source: direction < 0 ? highFloor : lowFloor,
    destination: direction < 0 ? lowFloor : highFloor
  }
}

/**
 * Returns a random direction.
 * @returns {number} - 1 for up and -1 for down
 */
function getDirection () {
  return Math.random() < 0.5 ? -1 : 1
}

/**
 * Returns a random upper level
 * @param {number} levelCount - the number of upper levels
 * @returns {number} - integer between 1 and the levelCount
 */
function getHighFloor (levelCount) {
  return getRandomInclusive(1, levelCount)
}

/**
 * Returns a random lower level
 * @param {number} subLevelCount - the number of sublevels
 * @returns {number} - integer between 0 and the subLevelCount
 */
function getLowFloor (sublevelCount) {
  return getRandomInclusive(0, sublevelCount) * -1
}

/**
 * Returns a random value between and including the parameter values
 * @param {number} min - the minimum number
 * @param {number} max - the maximum number
 * @returns {number} - integer between and including min and max
 */
function getRandomInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
