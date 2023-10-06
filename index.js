// Code your solution in this file!
let location = 42;
function distanceFromHqInBlocks(location){
    if (location>42){
        let blocks = (location - 42)
     return blocks}else{
       let blocks=(42-location)
       return blocks
    }
}
function distanceFromHqInFeet(location=43){
    if(location>42){
        let feet = ((distanceFromHqInBlocks(location))*264);
        return feet 
      }else{
       let feet = ((distanceFromHqInBlocks(location))*264);
       return feet
      }
} distanceFromHqInFeet(50)


function distanceTravelledInFeet(start,destination){
   if(destination>42){ 
    let feet = ((destination-start) * 264)
    return feet
     }else{
        let feet = ((start-destination) * 264)
        return feet
     }
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)

function calculatesFarePrice(start, destination){
       let feet =((distanceTravelledInFeet(start,destination)))

 if(feet<=400){
    let freeSample= feet * 0
    return freeSample;
 } else if(feet>400 && feet<=2000){
    let charges= (feet-400)*(2/100)
    return charges 
 } else if(feet>2000 && feet<=2500){
   let charges= ((feet-400)*(25))/1712
   return charges 
 }else if(feet>2500){
    return "cannot travel that far"
 }
}
calculatesFarePrice(43,44)
calculatesFarePrice(34,32)
calculatesFarePrice(50,58)
calculatesFarePrice(34,24)