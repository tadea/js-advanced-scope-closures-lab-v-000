function produceDrivingRange(blockRange) {
  return function(blockOne, blockTwo) {

    let difference = Math.abs(parseInt(blockOne) - parseInt(blockTwo))
    console.log(difference)

    if (blockRange > difference) {
      return `within range by ${blockRange - difference}`
    }
    else {
      return `${difference - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(precentage) {
  return function (fare) {
    return precentage*fare
  }
}

let driverId = 0

function createDriver() {
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
