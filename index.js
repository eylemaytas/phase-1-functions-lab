function distanceFromHqInBlocks(someValue) {
  let difference = 42 - someValue;
  let distance = Math.abs(difference);
  return distance;
}

function distanceFromHqInFeet(someValue) {
  distanceFromHqInBlocks(someValue);
  return distanceFromHqInBlocks(someValue) * 264;
}
function distanceTravelledInFeet(start, destination){
if (destination>start){
    return ((destination-start) * 264)
}
else 
return(start-destination) * 264
}
function calculatesFarePrice(start, destination) {
let distance = distanceTravelledInFeet(start, destination)
if (distance <= 400){
    return 0
} else if(distance >= 400 && distance <= 2000){
        return (distance - 400) * .02
} else if (distance > 2000 && distance <= 2500){
    return 25
} else {
    return 'cannot travel that far'
}

}
 
