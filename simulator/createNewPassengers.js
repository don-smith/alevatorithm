/**
 * CreateNewPassengers module.
 * @module createNewPassengers
 */

// @see module:createPassenger
import createPassenger from './createPassenger'

export default function createNewPassengers (passengers, load, building) {
  let allPassengers = [].concat(passengers || [])
  let count = getCount(load)
  for (let i = 0; i < count; i++) {
    allPassengers.push(createPassenger(building))
  }
  return allPassengers
}

function getCount (average) {
  let distro = closeToNormalDistribution()
  let normalizedDistro = Math.sqrt(distro * distro) // to avoid negative values
  return Math.round(average * normalizedDistro)
}

function closeToNormalDistribution () {
  // Based on the central limit theorem described as the second method here:
  // https://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution
  // Could replace with the `gaussian` npm module later
  return ((
  Math.random() +
  Math.random() +
  Math.random() +
  Math.random() +
  Math.random() +
  Math.random()
  ) - 3) / 3
}
