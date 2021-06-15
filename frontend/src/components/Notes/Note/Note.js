import React from "react";

const { useState } = React;

export default function Note(props) {
	const [showDesc, setShowDesc] = useState(false);

	const { title, body, id, onDelete, onEdit } = props;

	//Pokazywanie/ukreywanie opisu po kliknięciu w tytuł
	const toggleShowDesc = () => {
		setShowDesc((prevState) => !prevState);
	};

	//Usuwanie notatki o konkretnym id
	const deleteNote = () => {
		onDelete(id);
	};

	const editNote = () => {
		onEdit({ title: title, body: body, id: id });
	};

	return (
		<div className="note">
			<p onClick={toggleShowDesc}>{title}</p>
			{showDesc ? <div className="description">{body}</div> : null}
			<button onClick={editNote}>edytuj</button>
			<button className="delete" onClick={deleteNote}>
				usuń
			</button>
		</div>
	);
}
