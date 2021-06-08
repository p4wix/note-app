const Note = require("../../db/models/note");

module.exports = {
	saveNote(req, res) {
		const newNote = new Note({ title: "zakupy", body: "mleko jajka woda" });
		//save zwraca promise więc można użyć then
		newNote.save().then(() => {
			console.log("objekt dodany");
		});

		res.send("Homepage!");
	},
};
