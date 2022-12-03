const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2); //first argument in slice is the index/start, and the second argument indicates how many values to return in the array
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return (fare) => fare * multiplier;
    }

/*
const createFareMultiplier = function (multiplier) {
    const fareMultiplier = function (fare) {
        multiplier * fare;
    } 
    return fareMultiplier 
}

*/

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => returnFirstTwoDrivers(drivers);