const Note = require("../../db/models/note");

module.exports = {
	getAllNotes(req, res) {
		//zwrócenie tych notatek
		res.send("API works!");
	},

	getNote(req, res) {
		//pobieranie notatki
		res.send("info o notatce");
	},

	saveNote(req, res) {
		//const newNote = new Note({ title: "zakupy", body: "mleko jajka woda" });
		////save zwraca promise więc można użyć then
		//newNote.save().then(() => {
		//	console.log("objekt dodany");
		//});
		const title = req.body.title;
		const body = req.body.body;
		res.send("notatka zostala stworza tytuł: " + title + " tresc: " + body);
	},

	updateNote(req, res) {
		//aktualizowanie notatki
		res.send("notatka zauktualizowana");
	},

	deleteNote(req, res) {
		const id = req.params.id;
		//usuwanie notatki
		res.send("notatka usunieta id: " + id);
	},
};

//module.exports = new NoteActions();
