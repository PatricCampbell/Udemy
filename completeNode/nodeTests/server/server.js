const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({ error: "error!", name: "Todo App v1.0" });
});

// GET route /users returns an array of users
// give users a name and age property, 2 or 3
app.get("/users", (req, res) => {
  res.send([{ name: "Patric", age: 30 }, { name: "Kristal", age: 24 }]);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports.app = app;
