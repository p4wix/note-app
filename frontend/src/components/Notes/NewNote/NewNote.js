import React, { useState } from "react";

function NewNote({ onAdd }) {
	const [showForm, setShowForm] = useState(false);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const setRandomId = () => {
		let randomId = String(Math.random());
		return randomId;
	};

	const createNote = () => {
		const newNote = {
			id: setRandomId(),
			title: title,
			body: desc,
		};
		setTitle("");
		setDesc("");
		setShowForm(false);
		return newNote;
	};

	return showForm ? (
		<div className="note">
			<label>Tytuł:</label>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label>Opis:</label>
			<input
				type="text"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>

			<button onClick={() => onAdd(createNote())}>Dodaj notatkę</button>
		</div>
	) : (
		<button onClick={() => setShowForm((prevState) => !prevState)}>
			Nowa notatka
		</button>
	);
}

export default NewNote;
