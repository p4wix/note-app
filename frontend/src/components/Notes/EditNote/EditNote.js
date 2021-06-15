import React from "react";

const { useState } = React;

export default function EditNote(props) {
	const [title, setTitle] = useState(props.title);
	const [desc, setDesc] = useState(props.body);

	const changeTitleHandler = (e) => {
		setTitle(e.target.value);
	};

	const changeDescHandler = (e) => {
		setDesc(e.target.value);
	};

	const editNote = (e) => {
		e.preventDefault();
		const note = {
			title: title,
			body: desc,
			id: props.id,
		};
		props.onEdit(note);
	};

	return (
		<form className="note">
			<label>Tytuł:</label>
			<input type="text" value={title} onChange={changeTitleHandler} />

			<label>Opis:</label>
			<input type="text" value={desc} onChange={changeDescHandler} />

			<button onClick={editNote}>Zapisz notatkę</button>
		</form>
	);
}
