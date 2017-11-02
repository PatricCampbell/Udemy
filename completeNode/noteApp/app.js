console.log("Starting app.js");

const fs = require("fs");
const os = require("os");

const notes = require("./notes");

// const res = notes.addNote();
// console.log(res);

const add = notes.add(5, 9);

console.log(add);
// const user = os.userInfo();

// fs.appendFile(
//   "greetings.txt",
//   `Hello, ${user.username}! You are ${notes.age}.`,
//   err => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );
