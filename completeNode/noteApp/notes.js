const fs = require("fs");

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notesData.json");
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notesData.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  const note = { title, body };
  const notes = fetchNotes();

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
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
