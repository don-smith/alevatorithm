import createPassenger from './create-passenger'

export default function getNewPassengers (passengers, passengerLoad) {
  let count = getCount(passengerLoad)
  // process.stdout.write(count > 0 ? '*' : '.')
  process.stdout.write(count + '')
  return Array.from(new Array(count), (_) => createPassenger)
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
