import Ship from "./ship";

test('hit to increase by 1', () => {
    let ship = Ship()
    expect(ship.hits).toBe(0);
    ship.hit()
    expect(ship.hits).toBe(1)
})

test('type of ship', () => {
    let ship = Ship(carrier)
    expect(ship.type).toBe('carrier')
})
