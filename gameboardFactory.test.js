const gameboardFactory = require('./gameboardFactory');

it('placeShip function places a ship horizontally', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 4);
    expect(testBoard.board).toMatchObject([
            [0, 0, 0, 0, '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ]);
})

it('placeShip function places a ship horizontally', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 1], 'horizontal', 4);
    expect(testBoard.board).toMatchObject([
            ['-', 0, 0, 0, 0, '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ]);
})

it('placeShip function places a ship horizontally', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([9, 9], 'horizontal', 1);
    expect(testBoard.board).toMatchObject([
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,]
    ]);
})

it('placeShip function places a ship vertically', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 3);
    expect(testBoard.board).toMatchObject([
            [0, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [0, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [0, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ]);
})

it('placeShip function places a ship vertically', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([4, 9], 'vertical', 5);
    expect(testBoard.board).toMatchObject([
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ]);
})

it('Catches moves that do not fit on board (vertical)', () => {
    let testBoard = gameboardFactory();
    expect(testBoard.placeShip([9, 9], 'vertical', 5)).toBe('Not valid move');
})

it('Catches moves that do not fit on board (horizontal)', () => {
    let testBoard = gameboardFactory();
    expect(testBoard.placeShip([9, 9], 'horizontal', 5)).toBe('Not valid move');
})

it('Catches invalid move when ships are duplicates', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 5);
    expect(testBoard.placeShip([0, 0], 'horizontal', 5)).toBe('Not valid move');
})


it('Catches invalid move when ships overlap (perpendicular)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 5);
    expect(testBoard.placeShip([0, 0], 'vertical', 5)).toBe('Not valid move');
})

it('Sends newly created ship the correct coordinates for its location (horizontal)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 2);
    expect(testBoard.ships[0].placement).toMatchObject([[0,0], [0,1]]);
})

it('Sends newly created ship the correct coordinates for its location (vertical)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 2);
    expect(testBoard.ships[0].placement).toMatchObject([[0,0], [1,0]]);
})

it('Ship of length 1 is sunk after being attacked', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.receiveAttack([0,0]);
    expect(testBoard.ships[0].isSunk()).toBe(true);
})

it('Ship of length 5 is sunk after being attacked', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 5);
    testBoard.receiveAttack([0,0]);
    testBoard.receiveAttack([1,0]);
    testBoard.receiveAttack([2,0]);
    testBoard.receiveAttack([3,0]);
    testBoard.receiveAttack([4,0]);
    expect(testBoard.ships[0].isSunk()).toBe(true);
})

it('Correct ship is sunk after 5 have been created', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.placeShip([2, 0], 'vertical', 1);
    testBoard.placeShip([3, 0], 'vertical', 1);
    testBoard.placeShip([4, 0], 'vertical', 1);
    testBoard.receiveAttack([4,0]);
    expect(testBoard.ships[4].isSunk()).toBe(true);
})

it('Registers a miss on the board', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.receiveAttack([0,1]);
    expect(testBoard.board).toMatchObject( [
            [0, 'm', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
         ]);
})

it('Board tracks if ships are all sunk (no)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.receiveAttack([1,0]);
    expect(testBoard.allSunk()).toBe(false);
})

it('Board tracks if ships are all sunk (yes)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.receiveAttack([1,0]);
    testBoard.receiveAttack([0,0]);
    expect(testBoard.ships.length).toBe(2);
})

// [
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
//     ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
// ]