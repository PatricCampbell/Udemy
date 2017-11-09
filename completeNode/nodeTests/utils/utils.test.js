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

it("should async add two numbers", done => {
  utils.asyncAdd(5, 3, sum => {
    expect(sum)
      .toBe(8)
      .toBeA("number");
    done();
  });
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

it("should async square a number", done => {
  utils.asyncSquare(5, square => {
    expect(square)
      .toBe(25)
      .toBeA("number");
    done();
  });
});

// it("should expect some values", () => {
//   expect(12).toNotBe(11);
//   expect({ name: "patric" }).toEqual({ name: "patric" });
//   expect([1, 2, 3, 5]).toExclude(4);
// });

it("should verify first and last names are set", () => {
  const user = {
    age: 30,
    location: "BK Dawg"
  };
  utils.setName(user, "Patric Campbell");

  expect(user)
    .toInclude({ firstName: "Patric" })
    .toInclude({ lastName: "Campbell" })
    .toBeA("object");
});
