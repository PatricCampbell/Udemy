const expect = require("expect");
const rewire = require("rewire");

const app = rewire("./app");

describe("App", () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);

  it("should call the spy correctly", () => {
    const spy = expect.createSpy();

    spy("Andrew", 25);
    expect(spy).toHaveBeenCalledWith("Andrew", 25);
  });

  it("should call saveUser with user object", () => {
    const email = "patric@patric.com";
    const password = "password";

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
