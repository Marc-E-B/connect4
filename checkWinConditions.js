const checkLine = (array, player)=>{
    let sumPoints = 0;
        for(let i=0; i<array.length; i++){
            for(let y=0; y<array[i].length; y++){
                if(array[i][y] === player && array[i][y+1] === player){
                    sumPoints ++;
                } else {
                    sumPoints = 0;
                }   
                if(sumPoints >= 3){
                    return false;
                }
            }
        }
    //The return is used to return a checkLine value
    return "ongoing";
}

const checkColumn = (array, player)=>{
    //Initialize sumPoints to 0
    let sumPoints = 0;
    

    for(let i=0; i<array.length; i++){
        for(let y=0; y<array[i].length-2; y++){
            if(array[y][i] === player && array[y+1][i] === player){
                sumPoints ++;
            } else {
                sumPoints = 0;
            }

            if(sumPoints >= 3){
                return false;
            }
        }
    }
    return "ongoing";
}

//This function checks victory on descending diagonals from left to right
const checkDiagright = (array, player)=>{
    let sumPoints = 0;
        for(let line=0; line<array.length -3; line++){
            for(let elem=0; elem<array[line].length; elem++){
                if(array[line][elem] === player && array[line+1][elem+1] === player && array[line+2][elem+2] === player && array[line+3][elem+3] === player){
                    sumPoints += 4;
                }
                if(sumPoints >= 4){
                    return false;
                }
            }
        }
    return "ongoing";
}

//This function checks victory on rising diagonals from left to right
const checkDiagleft = (array, player)=>{
    let sumPoints = 0;
        for(let line=0; line<array.length -3; line++){
            for(let elem=0; elem<array[line].length; elem++){
                if(array[line][elem] === player && array[line+1][elem-1] === player && array[line+2][elem-2] === player && array[line+3][elem-3] === player){
                    sumPoints += 4;
                } 
                if(sumPoints >= 4){
                    return false;
                }
            }
        }
    return "ongoing";
}

//If the last line at the top is full, this is a draw
const checkDraw = (array)=>{
    if(!array[0].includes("-")){
        return false;
    }
    return "ongoing";
}

//This function checks all victory cases by calling the Previous functions
const checkBoard = (array, player)=>{

    if(!checkLine(array, player) || !checkColumn(array, player)){
        console.log("");
        console.log(`${player} has won the game`);
        return false;
    }

    else if(!checkDiagright(array, player)){
        console.log("");
        console.log(`${player} has won the game`);
        return false;
    }

    else if(!checkDiagleft(array, player)){
        console.log("");
        console.log(`${player} has won the game`);
        return false;
    }

    else if(!checkDraw(array)){
        console.log("");
        console.log("This is a draw ! Nobody won today...");
        return false;
    }
    else{
        console.log("The game goes on !");
        return true
    }
};

module.exports = { checkBoard };