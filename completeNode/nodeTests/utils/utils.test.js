const expect = require("expect");
const utils = require("./utils");

it("should add two numbers", () => {
  const res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA("number");
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}`);
  // }
});

it("should square a number", () => {
  const res = utils.square(5);

  expect(res)
    .toBe(25)
    .toBeA("number");
  // if (res !== 25) {
  //   throw new Error(`Expected 25, but got ${res}`);
  // }
});
