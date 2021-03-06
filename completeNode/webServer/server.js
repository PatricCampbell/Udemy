const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  const now = new Date().toString();
  const method = req.method;
  const url = req.url;
  const log = `${now}: ${method} ${url}`;

  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  console.log(log);
  next();
});

// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome to my amazing website!"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    error: "Error! Error! Error!"
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
