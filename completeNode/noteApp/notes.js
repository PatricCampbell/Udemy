const fs = require("fs");

const addNote = (title, body) => {
  let notes = [];
  const note = { title, body };

  try {
    const notesString = fs.readFileSync("notesData.json");
    notes = JSON.parse(notesString);
  } catch (err) {}

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notesData.json", JSON.stringify(notes));
  } else {
    console.log("Note already exists");
  }
};

const getAll = () => {
  console.log("Here are all the notes");
};

const getNote = title => {
  console.log("Getting note", title);
};

const removeNote = title => {
  console.log("Removing note", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
