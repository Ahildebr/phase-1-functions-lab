// Block Function
function distanceFromHqInBlocks(blocks) {
   const hq = 42
   let blocksDistance

    if (blocks >= hq) {
        blocksDistance = blocks - hq
        return blocksDistance
    }
    else {
        blocksDistance = hq - blocks
        return blocksDistance
    }   
}

//Feet Function
function distanceFromHqInFeet(blocks) { 
    const feetPerBlock = 264
    const hq = 42
    let blocksDistance
     
         if (blocks >= hq) {
             blocksDistance = blocks - hq
            
         }
         else {
             blocksDistance = hq - blocks
             
         }   
    return blocksDistance * feetPerBlock
}

//Distance Travelled in Feet (hopefully wearing shoes)
function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264
    let distance
    let feetDistance 
    if (start >= end) {
        distance = start - end
    }
    else {
        distance = end - start
    }
    feetDistance = distance * feetPerBlock
    return feetDistance
}

//Calulate Fare
function calculatesFarePrice(start, end) {
    const feetPerBlock = 264
    let distance
    let feetDistance 
    
    if (start >= end) {
        distance = start - end
    }
    else {
        distance = end - start
    }
   
    feetDistance = distance * feetPerBlock
     let fareMiles = feetDistance - 400
    
        if (fareMiles <= 0) {
        return 0
    }
    
        if (fareMiles <= 1600){
        return fareMiles * 0.02
    }
    
        if (fareMiles + 400 <= 2500) {
        return 25
    }

        else {
        return 'cannot travel that far'
    }
}
 