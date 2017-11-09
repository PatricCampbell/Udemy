const request = require("supertest");
const expect = require("expect");

const app = require("./server").app;

describe("Server", () => {
  describe("/", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body)
            .toInclude({ name: "Todo App v1.0" })
            .toInclude({ error: "error!" });
        })
        .end(done);
    });
  });

  describe("/users", () => {
    // make a new test
    // assert that status code is 200
    // assert that inside array, my user object exists with toInclude
    it("should include my user object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: "Patric", age: 30 });
        })
        .end(done);
    });
  });
});
