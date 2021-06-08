const mongoose = require("mongoose");

// tworzymy schemat/model notatki aby tworzył się rekord  w bazie danych
// Note nazwa
const Note = mongoose.model("Note", {
	title: String,
	body: String,
});

module.exports = Note;
