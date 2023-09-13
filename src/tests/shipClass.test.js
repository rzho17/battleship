const Ship = require("../shipClass");

const destroyer = new Ship(4, 0, false);

test.skip("destroyer", () => {
  expect(destroyer.isHit()).toBe(1);
});

test.skip("destroyer hit 2", () => {
  //   const ship = new Destroyer(4, 0, false);
  expect(destroyer.isHit()).toBe(2);
});

test.skip("destroyer is sunk", () => {
  expect(destroyer.isSunk()).toBeFalsy();
});

test.skip("destroyer hit 3", () => {
  //   const ship = new Destroyer(4, 0, false);
  expect(destroyer.isHit()).toBe(3);
});
test.skip("destroyer hit 4", () => {
  //   const ship = new Destroyer(4, 0, false);
  expect(destroyer.isHit()).toBe(4);
});

test.skip("destroyer is sunk", () => {
  expect(destroyer.isSunk()).toBeTruthy();
});
