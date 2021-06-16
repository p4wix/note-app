import React from "react";

const { useState } = React;

export default function Note(props) {
	const [showDesc, setShowDesc] = useState(false);

	const { title, body, _id, onDelete, onEdit } = props;

	//Pokazywanie/ukreywanie opisu po kliknięciu w tytuł
	const toggleShowDesc = () => {
		setShowDesc((prevState) => !prevState);
	};

	//Usuwanie notatki o konkretnym _id
	const deleteNote = () => {
		onDelete(_id);
	};

	const editNote = () => {
		onEdit({ title: title, body: body, _id: _id });
	};

	return (
		<div className="note">
			<p onClick={toggleShowDesc}>{title}</p>
			{showDesc ? <div className="description">{body}</div> : null}
			<div className="note-buttons-warp">
				<button onClick={editNote}>Edit</button>
				<button className="delete" onClick={deleteNote}>
					Delete
				</button>
			</div>
		</div>
	);
}
