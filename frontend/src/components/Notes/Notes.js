import React from "react";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import Modal from "react-modal";
import "./Notes.css";
import EditNote from "./EditNote/EditNote";

const { useState } = React;

export default function Notes() {
	const [notes, setNotes] = useState([
		{
			title: "Wykąpać psa",
			body: "pamiętaj aby kurwa wykąpać tego chuja",
			id: "123",
		},
		{
			title: "Zakupy",
			body: "kup piwo kurwo",
			id: "321",
		},
	]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentEditedNote, setCurrentEditedNote] = useState({});

	//Funckja usuwająca notatkę
	const handleDeleteButton = (id) => {
		const currentNotes = [...notes].filter((note) => note.id !== id);
		setNotes(currentNotes);
	};

	//Funkcja dodająca do tablicy nową notatkę
	const handleAddNote = (note) => {
		const currentNotes = [...notes];
		currentNotes.push(note);
		setNotes(currentNotes);
	};

	//Funckja która szuka indexu poszczególnej notatki podmienia element w tablicy o danych indexie i akutualizuje tablice
	const handleEditNote = (note) => {
		const currentNotes = [...notes];
		const index = currentNotes.findIndex((item) => item.id === note.id);
		if (index > -1) {
			currentNotes[index] = note;
			setNotes(currentNotes);
		}
		toggleModal();
	};

	const toggleModal = () => {
		setIsModalOpen((prevState) => !prevState);
	};

	//Funkcja zamykająca modal i zapisująca nową notatkę która jest juz po edycji
	const editNoteHandler = (note) => {
		toggleModal();
		setCurrentEditedNote(note);
	};

	return (
		<div>
			<h1>Moje notatki:</h1>
			<NewNote onAdd={handleAddNote} />

			<Modal
				isOpen={isModalOpen}
				contentLabel="Edytuj notatke"
				ariaHideApp={false}
			>
				<EditNote
					title={currentEditedNote.title}
					body={currentEditedNote.body}
					id={currentEditedNote.id}
					onEdit={handleEditNote}
				/>
				<button onClick={toggleModal}>Anuluj</button>
			</Modal>

			{notes.map((item) => (
				<Note
					key={item.id}
					title={item.title}
					body={item.body}
					id={item.id}
					onEdit={editNoteHandler}
					onDelete={handleDeleteButton}
				/>
			))}
		</div>
	);
}
