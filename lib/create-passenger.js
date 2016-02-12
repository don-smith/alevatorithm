export default function createPassenger (building) {
  let direction = getDirection()
  let highFloor = getHighFloor(building.numberOfLevels)
  let lowFloor = getLowFloor(building.numberOfSublevels)

  return {
    direction: direction,
    source: direction < 0 ? highFloor : lowFloor,
    destination: direction < 0 ? lowFloor : highFloor
  }
}

function getDirection () {
  // Returns 1 for up and -1 for down
  return Math.random() < 0.5 ? -1 : 1
}

function getHighFloor (levelCount) {
  // Returns an integer between 1 and the levelCount
  return getRandomInclusive(1, levelCount)
}

function getLowFloor (sublevelCount) {
  // Returns an integer between 0 and sublevelCount
  return getRandomInclusive(0, sublevelCount) * -1
}

function getRandomInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

