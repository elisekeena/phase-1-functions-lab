// Code your solution in this file!

function distanceFromHqInBlocks(pickUpLocation) {  

    let blockNumber

    if (pickUpLocation > 42) {
        blockNumber =  pickUpLocation - 42;
    } 
    else {
        blockNumber =  42 - pickUpLocation;
    }

    return blockNumber
};

function distanceFromHqInFeet(pickUpLocation) {
    let blockNumber =  distanceFromHqInBlocks(pickUpLocation)
    let distanceInFeet = blockNumber * 264

    return distanceInFeet
};

function distanceTravelledInFeet(start, destination) {
    
    let totalDistanceInFeet

    if (start < destination) {
        totalDistanceInFeet = (destination - start) * 264;
    } 
    else {
        totalDistanceInFeet = (start - destination) * 264;
    }

    return totalDistanceInFeet
};


function calculatesFarePrice(start, destination){

let totalFarePrice
let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    totalFarePrice = 0;
  } else if (distance > 400 && distance <= 2000) {
    totalFarePrice = .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    totalFarePrice = 25;
  } else {
    totalFarePrice = 'cannot travel that far';
  }
  return totalFarePrice
};