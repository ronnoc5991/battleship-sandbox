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

it('placeShip function places 2 ships with the correct index Numbers on board', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([4, 9], 'vertical', 5);
    testBoard.placeShip([0, 0], 'vertical', 5);
    expect(testBoard.board).toMatchObject([
            [1, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [1, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [1, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [1, '-', '-', '-', '-', '-', '-', '-', '-', '-',],
            [1, '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', 0,],
            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ]);
})

it('Catches moves that do not fit on board (vertical)', () => {
    let testBoard = gameboardFactory();
    expect(testBoard.placeShip([9, 9], 'vertical', 5)).toBe('Not valid placement');
})

it('Catches moves that do not fit on board (horizontal)', () => {
    let testBoard = gameboardFactory();
    expect(testBoard.placeShip([9, 9], 'horizontal', 5)).toBe('Not valid placement');
})

it('Catches invalid move when ships are duplicates', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 5);
    expect(testBoard.placeShip([0, 0], 'horizontal', 5)).toBe('Not valid placement');
})


it('Catches invalid move when ships overlap (perpendicular)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'horizontal', 5);
    expect(testBoard.placeShip([0, 0], 'vertical', 5)).toBe('Not valid placement');
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

it('Ship of length 5 is not sunk after being attacked 4 times', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 5);
    testBoard.receiveAttack([0,0]);
    testBoard.receiveAttack([1,0]);
    testBoard.receiveAttack([2,0]);
    testBoard.receiveAttack([3,0]);
    expect(testBoard.ships[0].isSunk()).toBe(false);
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

it('Incorrect ship is not sunk after 5 have been created', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.placeShip([2, 0], 'vertical', 1);
    testBoard.placeShip([3, 0], 'vertical', 1);
    testBoard.placeShip([4, 0], 'vertical', 1);
    testBoard.receiveAttack([4,0]);
    expect(testBoard.ships[3].isSunk()).toBe(false);
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
    expect(testBoard.allSunk()).toBe(true);
})

it('Board tracks if ships are all sunk (yes)', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.placeShip([2, 0], 'vertical', 1);
    testBoard.placeShip([3, 0], 'vertical', 1);
    testBoard.placeShip([4, 0], 'vertical', 1);
    testBoard.receiveAttack([1,0]);
    testBoard.receiveAttack([0,0]);
    testBoard.receiveAttack([2,0]);
    testBoard.receiveAttack([3,0]);
    testBoard.receiveAttack([4,0]);
    expect(testBoard.allSunk()).toBe(true);
})

it('Rejects attack if spot has already been attacked and hit', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.placeShip([1, 0], 'vertical', 1);
    testBoard.receiveAttack([1,0]);
    expect(testBoard.receiveAttack([1,0])).toBe('Not valid attack');
})

it('Rejects attack if spot has already been attacked and missed', () => {
    let testBoard = gameboardFactory();
    testBoard.placeShip([0, 0], 'vertical', 1);
    testBoard.receiveAttack([1,0]);
    expect(testBoard.receiveAttack([1,0])).toBe('Not valid attack');
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