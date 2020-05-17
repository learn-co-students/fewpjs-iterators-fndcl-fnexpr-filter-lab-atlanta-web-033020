// Code your solution here
const drivers = [];

function findMatching(drivers, name) {
  return drivers.filter(driverName => driverName.toLowerCase() === name.toLowerCase())
}

// // Got this to work, but learn wont' accept it, so I'm going to use the solution
// function fuzzyMatch(drivers, string) {
//   length = string.length
//   return drivers.filter(driverName => driverName.slice(0, length).toLowerCase() === string.toLowerCase())
// }

function fuzzyMatch(source, testString) {
  return source.filter(possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}