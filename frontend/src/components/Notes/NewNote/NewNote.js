import React from "react";
import Require from "./Require";

const { useState } = React;

export default function NewNote(props) {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [counter, setCounter] = useState(1);
	const [showForm, setShowForm] = useState(false);
	const [validationOkTitle, setValidationOkTitle] = useState(false);
	const [validationOkDesc, setValidationOkDesc] = useState(false);

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
		if (title === "" && desc === "") {
			setValidationOkTitle(true);
			setValidationOkDesc(true);
		} else if (title !== "" && desc === "") {
			setValidationOkTitle(false);
			setValidationOkDesc(true);
		} else if (title === "" && desc !== "") {
			setValidationOkTitle(true);
			setValidationOkDesc(false);
		} else {
			const noteToAdd = {
				title: title,
				body: desc,
				_id: counter,
			};
			setCounter(counter + 1);
			onAdd(noteToAdd);
			setTitle("");
			setDesc("");
			showFormHandler();
			setValidationOkTitle(false);
			setValidationOkDesc(false);
		}
	};

	const style = {
		textAlign: "left",
	};

	return showForm ? (
		<form className="note" style={style}>
			<label>Title: {validationOkTitle ? <Require /> : null}</label>
			<input type="text" value={title} onChange={changeTitleHandler} />

			<label>Description: {validationOkDesc ? <Require /> : null}</label>
			<input type="text" value={desc} onChange={changeDescHandler} />

			<button onClick={addNote}>Add note</button>
			<button onClick={showFormHandler}>Hide</button>
		</form>
	) : (
		<button onClick={showFormHandler} className="fill">
			New note
		</button> //ostylować kurwe
	);
}
