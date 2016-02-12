import config from './lib/config'
import building from './lib/building'
import adjustSchedule from './lib/adjust-schedule'
import getNewPassengers from './lib/get-new-passengers'

let schedule = []
let newPassengers = []
let progressIntervals = 0
let speed = 1000 * config.timeMultiplier

let intervalId = setInterval(runElevators, speed)

function runElevators () {
  let pph = building.passengersPerHour
  let multiplier = config.timeMultiplier
  newPassengers = getNewPassengers(pph, multiplier)
  schedule = adjustSchedule(schedule, newPassengers)
  manageProgress()
}

function manageProgress () {
  progressIntervals += 1
  process.stdout.write('.')
  if (progressIntervals >= config.durationIntervals) {
    clearInterval(intervalId)
  }
}

