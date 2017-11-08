const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/bad", (req, res) => {
  res.send({
    error: "Error! Error! Error!"
  });
});

app.listen(3000);
