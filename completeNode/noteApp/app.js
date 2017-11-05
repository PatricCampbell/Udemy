const argv = require("yargs").argv;

const notes = require("./notes");

const command = argv._[0];
const title = argv.title;
const body = argv.body;

switch (command) {
  case "add":
    const note = notes.addNote(title, body);
    if (note) {
      console.log(`Note added! title: ${note.title} body: ${note.body}`);
    } else {
      console.log("Note already exists");
    }
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
