import React from "react";

const { useState } = React;

export default function NewNote(props) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [counter, setCounter] = useState(1);
	const [showForm, setShowForm] = useState(false);

	const { onAdd } = props;

	const changeTitleHandler = (e) => {
		setTitle(e.target.value);
	};

	const changeDescHandler = (e) => {
		setDesc(e.target.value);
	};

	//Pokazywanie formularza
	const showFormHandler = () => {
		setShowForm((prevState) => !prevState);
	};

	//Funkcja tworzaca notatkę ze stanu który jest w inputach
	const addNote = (e) => {
		e.preventDefault();
		const noteToAdd = {
			title: title,
			body: desc,
			id: counter,
		};
		setCounter(counter + 1);
		onAdd(noteToAdd);
		setTitle("");
		setDesc("");
		showFormHandler();
	};

	return showForm ? (
		<form className="note">
			<label>Tytuł:</label>
			<input type="text" value={title} onChange={changeTitleHandler} />

			<label>Opis:</label>
			<input type="text" value={desc} onChange={changeDescHandler} />

			<button onClick={addNote}>Dodaj notatkę</button>
		</form>
	) : (
		<button onClick={showFormHandler}>Nowa notatka</button> //ostylować kurwe
	);
}
