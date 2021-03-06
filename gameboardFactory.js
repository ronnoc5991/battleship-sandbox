const shipFactory = require('./shipFactory');

const gameboardFactory = () => {

    //this holds the ship objects
    const ships = [];

    const allSunk = () => {
        let sinkCount = 0;

        ships.forEach((ship) => {
            if(ship.isSunk()) {
                sinkCount++
            }
        })

        if (sinkCount === ships.length) {
            return true
        } else {
            return false
        }
    }

    const placeShip = (coordinates, direction, shipSize) => {
        let row = coordinates[0];
        let column = coordinates[1];

        if (direction === 'horizontal') {
            if ((column + shipSize) <= 10) { //can board fit the ship here?

                let isOccupied = false; //pull this above if statements?
                for (i = column; i < (column + shipSize); i++) { //are these spaces already taken?
                    if (board[row][i] !== '-') { //if the space is not empty
                        isOccupied = true; //the space isOccupied
                    }
                }

                if (isOccupied === true) {
                    return 'Not valid placement';
                } else { // green path
                    let newShip = shipFactory(shipSize) //create new ship from Factory
                    for (i = column; i < (column + shipSize); i++) { //loop through the different columns of this row
                        board[row][i] = ships.length //mark the location on the board with the indexNumber that this ship will later be called with
                        newShip.placement.push([row, i]);  //pass the ship its coordinates
                    }
                    ships.push(newShip); //places ship in board's ship array
                }

            } else {
                return 'Not valid placement';
            }
        }

        if (direction === 'vertical') {
            if ((row + shipSize) <= 10) {//check if placement is valid

                let isOccupied = false;
                for (i = row; i < (row + shipSize); i++) { //are these spaces already taken?
                    if (board[i][column] !== '-') { //if the space is not empty
                        isOccupied = true;
                    }
                }

                if (isOccupied === true) {
                    return 'Not valid placement';
                } else { //green path
                    let newShip = shipFactory(shipSize);
                    for (i = row; i < (row + shipSize); i++) { //iterate through rows based on shipSize
                        board[i][column] = ships.length //mark the location on the board with the indexNumber that this ship will later be called with 
                        newShip.placement.push([i, column]); //pass the ship its coordinates
                    }
                    ships.push(newShip); ////places ship in board's ship array
                }

            } else {
                return 'Not valid placement';
            }
        }
    };

    const receiveAttack = (coordinates) => {
        let row = coordinates[0];
        let column = coordinates[1];
        //if the attack spot !== '-' or numbers... block attack... is this done in DOM?

        if(board[row][column] === 'm' || board[row][column] === 'x') {
            return 'Not valid attack'
        } else if (board[row][column] === '-') { //miss
            board[row][column] = 'm' //mark this place on the board as a missed shot
        } else { //hit
            let index = board[row][column]; //get the index number of the ship in this boards ship array
            ships[index].hit(coordinates); //call that ships hit function with the coordinates
            board[row][column] = 'x' //mark this as a hit on the board
        }
    }

    // ------------------- BOARD LEGEND -------------------
        // '-' is default state
        // # is the index of a ship in the boards ship array
        // 'm' is a miss
        // 'x' is a hit 

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

    return { placeShip, receiveAttack, allSunk, board, ships }
}

module.exports = gameboardFactory;