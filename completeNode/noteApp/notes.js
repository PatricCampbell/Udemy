const addNote = (title, body) => {
  console.log("Adding note", title, body);
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
