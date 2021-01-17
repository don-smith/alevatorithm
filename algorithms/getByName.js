import * as independent from './independent'
import * as coordinator from './coordinator'

const algorithms = {
  independent,
  coordinator
}

export function getByName (name, log = console, app = process) {
  if (!name) {
    const algorithmNames = Object.keys(algorithms)
    log.error(`The algorithm name was not specified.
      Choose one of the following: ${algorithmNames.join(', ')}`)
    app.exit(1)
  }

  if (!Object.keys(algorithms).includes(name)) {
    const algorithmNames = Object.keys(algorithms)
    log.error(`The algorithm name specified (${name}) is not valid.
      Choose one of the following: ${algorithmNames.join(', ')}`)
    app.exit(1)
  }

  return algorithms[name]
}
