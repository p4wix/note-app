import React, { useState } from "react";
import Note from "./Note/Note";
import "./Notes.css";

function Notes() {
	const notes = [
		{
			id: "12312",
			title: "Wykpać psa",
			body: "pamiętaj aby wykąpać psa specjanym szamponem",
		},
		{
			id: "5523",
			title: "Zrobić zakupy",
			body: "mleko, jajka, szynka",
		},
	];
	const [myNotes, setMyNotes] = useState([]);

	return (
		<div>
			<p>Moje notatki:</p>

			{notes.map((note) => (
				<Note note={note} />
			))}
		</div>
	);
}

export default Notes;
