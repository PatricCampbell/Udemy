const argv = require("yargs").argv;

const notes = require("./notes");

const command = argv._[0];
const title = argv.title;
const body = argv.body;

switch (command) {
  case "add":
    notes.addNote(title, body);
    break;
  case "list":
    notes.getAll();
    break;
  case "read":
    notes.getNote(title);
    break;
  case "remove":
    notes.removeNote(title);
    break;
  default:
    console.log("Command not recognized");
}
