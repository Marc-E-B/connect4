const DropPiece = (array, piece, index)=>{
  
    for(let i = array.length-1; i >=0; i--){
        if(array[i][index]==="-"){
            array[i][index] = piece;
            //return true" takes us out of the loop and restarts the gameloop
            return true
        }
    }
    //Return false" exits the function and returns the value 'false' to the 'DropPiece' function.
    //It is also used for the !DropPiece condition in the game.js module.
    return false;
}

module.exports = { DropPiece };