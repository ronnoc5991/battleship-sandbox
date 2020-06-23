const shipFactory = require('./shipFactory');

const gameboardFactory = () => {

    //this holds the ship objects
    const ships = [];


    //check if ship can be placed
        //taking into account the size of the board
        //taking into account the position of already placed ships
    //if ship cannot be placed... 
        //reject the request
    //if ship can be placed... 
        //mark the ships location on the board
        //pass the ship an array of coordinate arrays that contain the coordinates of its placement
        //call the shipFactory Function with the ship length



    const placeShip = (coordinates, direction, shipSize) => {
        let row = coordinates[0];
        let column = coordinates[1];

        if (direction === 'horizontal') {
            if ((column + shipSize) <= 10) { //can board fit the ship here?

                let isOccupied = false;
                for (i = column; i < (column + shipSize); i++) { //are these spaces already taken?
                    if (board[row][i] !== '-') {
                        isOccupied = true;
                    }
                }

                if (isOccupied === true) {
                    //deny placement
                } else {
                    //create new ship from Factory
                    for (i = column; i < (column + shipSize); i++) { //place ship on board
                        board[row][i] = 'x' //mark the location on the board
                        //pass the ship the coordinates of this location (newShip.position.push([coordinates]))
                    } 
                }

            } else {
                return 'Not valid move';
            }
        }

        if (direction === 'vertical') {
            if ((row + shipSize) <= 10) {//check if placement is valid
                for (i = row; i < (row + shipSize); i++) { //iterate through rows based on shipSize
                    board[i][column] = 'x' 
                }
            } else {
                return 'Not valid move';
            }
        }
        ships.push(shipFactory(shipSize)); //creates a ship of given size and puts it on the board
    };

    const receiveAttack = (coordinates) => {
        //determine whether the attack is a hit or a miss
        //mark it accordingly on the board
        //if it is a hit... send the appropriate ship a hit function

    }

    const board = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ];

    return { placeShip, receiveAttack, board, ships }
}

module.exports = gameboardFactory;