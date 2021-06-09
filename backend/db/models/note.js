const mongoose = require("mongoose");

//Walidacja tytułu
const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
});

//Tworzymy schemat/model notatki aby tworzył się rekord  w bazie danych i na tej podstawie mozemy wyszukiwac/usuwac itp
//Note nazwa
//Linkujemy model Note z schamtem
const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
