//Function that displays the board
function printBoard(array){
    let columnName = "";
    let lines = "";
   
    for(let i=0; i<array[0].length; i++){
        columnName += i + " ";
    }

    console.log(columnName);
    console.log("");

    for(let i=0; i<array.length; i++){
        for(let y=0; y<array[i].length; y++){
            lines += array[i][y] + " ";
        }
        console.log(lines);
        lines = "";
    }    
};

module.exports = { printBoard };
