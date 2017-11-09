const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({ error: "error!", name: "Todo App v1.0" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

module.exports.app = app;
