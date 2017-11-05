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
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes`);

    allNotes.forEach(note => {
      console.log(`title: ${note.title} body: ${note.body}`);
    });
    break;
  case "read":
    const foundNote = notes.getNote(title);
    if (foundNote) {
      console.log(
        `Note found! title: ${foundNote.title} body: ${foundNote.body}`
      );
    } else {
      console.log("Note not found");
    }
    break;
  case "remove":
    const noteRemoved = notes.removeNote(title);
    const message = noteRemoved ? "Note removed" : "Note not found";

    console.log(message);
    break;
  default:
    console.log("Command not recognized");
}
