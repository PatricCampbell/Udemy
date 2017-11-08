const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

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

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
