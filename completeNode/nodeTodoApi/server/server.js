const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { User } = require("./models/user");
const { Todo } = require("./models/todo");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  const todo = new Todo(req.body);

  todo
    .save()
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(3000, () => {
  console.log("Server has started");
});
