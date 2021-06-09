const Note = require("../../db/models/note");

class NoteActions {
	//Pobieranie wszystkich notatek
	async getAllNotes(req, res) {
		let doc;

		try {
			doc = await Note.find({});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}

		//zwraca tablice obiektow ktore sa zapisane w bazie i ustawia kod statusu na 200
		res.status(200).json(doc);
	}

	//Pobieranie wybranej notatki z przekazaniem _id w url
	async getNote(req, res) {
		//pobieranie notatki
		//id to ktore zostalo przekazane w url
		const id = req.params.id;
		let note;

		try {
			note = await Note.findOne({ _id: id });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}

		res.status(200).send(note);
	}

	//Dodawanie nowej notatki
	async saveNote(req, res) {
		const title = req.body.title; //Obiekt odczytany dzięki body-parser
		const body = req.body.body;

		let note = new Note({
			title: title,
			body: body,
		});

		try {
			await note.save();
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}

		res.status(201).json(note); //The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource
	}

	//Aktualizowanie notatki
	async updateNote(req, res) {
		const id = req.params.id;
		const title = req.body.title; //Obiekt odczytany dzięki body-parser
		const body = req.body.body;

		let note;

		//Znajdujemy konkretna notatke o danym id
		try {
			note = await Note.findOne({ _id: id });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}

		//przypisujemy nowe wartosci przechwycone wyzej
		note.title = title;
		note.body = body;

		try {
			await note.save();
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}

		res.status(201).send(note);
	}

	//Usuwanie notatki
	async deleteNote(req, res) {
		const id = req.params.id;
		await Note.deleteOne({ _id: id });
		res.status(204).send(); //The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page
	}
}

module.exports = new NoteActions();
