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
			_id: props._id,
		};
		props.onEdit(note);
	};

	const style = {
		textAlign: "left",
	};

	return (
		<form className="note" style={style}>
			<label>Title:</label>
			<input type="text" value={title} onChange={changeTitleHandler} />

			<label>Description:</label>
			<input type="text" value={desc} onChange={changeDescHandler} />

			<div className="editNotes-wrap">
				<button onClick={editNote}>Save note</button>
				<button onClick={props.toggleModal}>Anuluj</button>
			</div>
		</form>
	);
}
