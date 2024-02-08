// const shipTypes = {
//     carrier : {
//         id: 1,
//         name: 'carrier',
//         length: 5
//     },
//     battleship : {
//         id: 2,
//         name: 'battleship',
//         length: 4
//     },
//     cruiser : {
//         id: 3,
//         name: 'cruiser',
//         length: 3
//     },
//     submarine : {
//         id: 4,
//         name: 'submarine',
//         length: 3
//     },
//     destroyer : {
//         id: 5,
//         name: 'destroyer',
//         length: 2
//     },
// }

class ShipTypes {
    constructor(id, name, length) {
        this.id = id
        this.name = name
        this.length = length
    }
}

const carrier = new ShipTypes(1, 'carrier', 5);
const battleship = new ShipTypes(2, 'battleship', 4);
const cruiser = new ShipTypes(3, 'cruiser', 3);
const submarine = new ShipTypes(4, 'submarine', 3);
const destroyer = new ShipTypes(5, 'destroyer', 2)

const ships = [carrier, battleship, cruiser, submarine, destroyer]

export default ShipTypes; ships