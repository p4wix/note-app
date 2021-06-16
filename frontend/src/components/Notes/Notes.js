import React from "react";
import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import EditNote from "./EditNote/EditNote";

import Modal from "react-modal";
import axios from "axios";

import "./Notes.css";

const { useState, useEffect } = React;

export default function Notes() {
	const [notes, setNotes] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentEditedNote, setCurrentEditedNote] = useState({});

	//Funckja usuwająca notatkę
	const handleDeleteButton = async (id) => {
		const currentNotes = [...notes].filter((note) => note._id !== id);

		await axios.delete("http://localhost:3001/api/notes/" + id);

		setNotes(currentNotes);
	};

	//Funkcja dodająca do tablicy nową notatkę
	const handleAddNote = async (note) => {
		const currentNotes = [...notes];
		//Backend
		const res = await axios.post("http://localhost:3001/api/notes", note);
		const newNote = res.data;
		//Frontend
		currentNotes.push(newNote);
		setNotes(currentNotes);
	};

	//Funckja która szuka indexu poszczególnej notatki podmienia element w tablicy o danych indexie i akutualizuje tablice
	const handleEditNote = async (note) => {
		//Backend
		await axios.put("http://localhost:3001/api/notes/" + note._id, note);

		//Frontend
		const currentNotes = [...notes];
		const index = currentNotes.findIndex((item) => item._id === note._id);
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

	const fetchData = async () => {
		const res = await axios.get("http://127.0.0.1:3001/api/notes");
		console.log(res.data);
		setNotes(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1>My notes:</h1>
			<NewNote onAdd={handleAddNote} />

			<Modal
				isOpen={isModalOpen}
				contentLabel="Edytuj notatke"
				ariaHideApp={false}
				style={{
					overlay: {
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(255, 255, 255, 0.75)",
					},
					content: {
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "absolute",
						height: "70vh",
						width: "70vw",
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						transform: "translate(-50%, -50%)",
						border: "1px sol_id #ccc",
						background: "#fff",
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "4px",
						outline: "none",
						padding: "20px",
					},
				}}
			>
				<EditNote
					title={currentEditedNote.title}
					body={currentEditedNote.body}
					_id={currentEditedNote._id}
					onEdit={handleEditNote}
					toggleModal={toggleModal}
				/>
			</Modal>

			{notes.map((item) => (
				<Note
					key={item._id}
					title={item.title}
					body={item.body}
					_id={item._id}
					onEdit={editNoteHandler}
					onDelete={handleDeleteButton}
				/>
			))}
		</div>
	);
}
