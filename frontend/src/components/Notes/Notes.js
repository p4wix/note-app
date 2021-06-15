import React, { useState } from "react";
import Modal from "react-modal";
import NewNote from "./NewNote/NewNote";
import Note from "./Note/Note";
import EditNote from "./EditNote/EditNote";
import "./Notes.css";

function Notes() {
	const [showEditModal, setShowEditModal] = useState(false);
	const [notes, setNotes] = useState([
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
	]);
	const [editNote, setEditNote] = useState({});

	const deleteNote = (id) => {
		const newNotes = [...notes].filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	const addNote = (note) => {
		//note to ma byc obiekt
		const newNotes = [...notes];
		newNotes.push(note);
		setNotes(newNotes);
	};

	const editNoteFun = (note) => {
		const newNotes = [...notes];
		const index = notes.findIndex((x) => x.id === note.id);
		if (index >= 0) {
			notes[index] = note;
			setNotes(newNotes);
		}
		toggleModal();
	};

	const toggleModal = () => {
		setShowEditModal((prevState) => !prevState);
	};

	const editNoteHandler = (note) => {
		toggleModal();
		setEditNote(note);
	};

	return (
		<div>
			<h1>Moje notatki:</h1>
			<NewNote onAdd={addNote} />

			<Modal isOpen={showEditModal} contentLabel="Edytuj notatkę">
				<EditNote
					onEdit={(note) => editNoteFun(note)}
					title={editNote.title}
					body={editNote.body}
					id={editNote.id}
				/>
				<button onClick={() => toggleModal()}>Anuluj</button>
			</Modal>

			{notes.map((note) => (
				<Note
					key={note.id}
					note={note}
					onDelete={deleteNote}
					onEdit={(note) => editNoteHandler(note)}
				/>
			))}
		</div>
	);
}

export default Notes;
