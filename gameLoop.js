
//Allow functions between {} of the 'board' module to be used in this module
const { printBoard } = require('./board');
//Allow functions between {} of the 'DropPiece' module to be used in this module
const { DropPiece } = require('./DropPiece');
//Allow functions between {} of the 'checkWinConditions' module to be used in this module
const { checkBoard } = require('./checkWinConditions');

var prompt = require('prompt-sync')({
    sigint: true // you can kill the terminal with "ctrl + C"
  });

  var board = [
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-"]
]

const gameLoop = ()=>{
    //initializes the player as "Y".
    let player = "Y";
    
    
    while(true){
        // Create a line break for visibility
        console.log("");

        //Display the board
        printBoard(board);

        //Ask to the player which column he wants to play on
        var input =  parseInt(prompt(`It's ${player}'s turns. In wich column do you want to play in?:`));
        
        //If the value is not a number, the program returns the following message
        if(isNaN(input)){
            console.log("The value is not a number");
        }
        //Otherwise, if the chosen number is out of range, the program returns the following message
        else if(input <0 || input > (board.length)){
            console.log("This column doesn't exist");
        }
        
        //If DropPiece return 'false' the program returns the following message
        if(!DropPiece(board, player, input)){
            console.log(`Player ${player}, please select an other column`)
        }
        //Otherwise if 'checkBoard' is 'false', the program displays the board and the 'gameLoop' function terminates.
        else {
            if(!checkBoard(board,player)){
                console.log("");
                console.log("See the result !")
                printBoard(board);
                return;
            }
            
            //If at this moment player = "Y" player becomes "R"
            //player = player == "Y" ? "R" : "Y" (ternary function)
            if(player == "Y"){
                player = "R";
            
            }
            //Otherwise, if player is something else than "Y", player becomes"Y"
            else{
                player = "Y";
            }
        }
    }
}
module.exports = {gameLoop};