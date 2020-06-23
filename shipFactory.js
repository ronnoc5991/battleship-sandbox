const shipFactory = (length) => {

    let ship = [];


    //position of ship should be passed from the board object upon creation....
    //represented by an array of coordinate arrays?

    let position = [];

    for (i=0; i < length; i++) {
        ship.push('safe');
    }

    const hit = (position) => {
        ship[position] = 'hit';
    }

    const isSunk = () => {
        let sunk = false;
        let hitCount = 0;
        for (i=0; i<ship.length; i++) {
            if (ship[i] === 'hit') {
                hitCount += 1;
            }
        }
        if (hitCount === ship.length) {
            sunk = true;
        }
        return sunk;
    }

    return { ship, hit, isSunk, position };
}

module.exports = shipFactory;