// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( driver => {
        return driver.toLowerCase() == string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    // console.log(string)
    return drivers.filter( driver => {
        return driver.toLowerCase().slice(0, string.length) == string.toLowerCase()
    })
}

function matchName(drivers, string) {
    // console.log(string)
    return drivers.filter( driver => {
        return driver['name'].toLowerCase() == string.toLowerCase()
    })
}