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

 