const shipFactory = require('./shipFactory');

it('Creates array with specified length to represent the ship', () => {
    expect(shipFactory(5).ship).toEqual(['safe', 'safe', 'safe', 'safe', 'safe',])
})

it('Ship.isSunk returns false if ship not sunk', () => {
    expect(shipFactory(5).isSunk()).toEqual(false);
})

test.todo('creates ships of different sizes')