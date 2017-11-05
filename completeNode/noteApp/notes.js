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
  return fetchNotes();
};

const getNote = title => {
  const notes = fetchNotes();

  const filteredNotes = notes.filter(note => note.title === title);

  return filteredNotes[0];
};

const removeNote = title => {
  const notes = fetchNotes();

  filteredNotes = notes.filter(note => note.title !== title);

  if (notes.length === filteredNotes.length) {
    return false;
  } else {
    saveNotes(filteredNotes);
    return true;
  }
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
