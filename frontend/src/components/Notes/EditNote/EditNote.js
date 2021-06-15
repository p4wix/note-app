import React, { useState } from "react";

function EditNote(props) {
	const [title, setTitle] = useState(props.title);
	const [desc, setDesc] = useState(props.body);

	const editNote = () => {
		const note = {
			title: title,
			body: desc,
			id: props.id,
		};
		props.onEdit(note);
	};

	return (
		<div className="note">
			<label>Tytuł:</label>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>

			<label>Opis:</label>
			<input
				type="text"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>

			<button onClick={() => editNote()}>Zapisz notatkę</button>
		</div>
	);
}

export default EditNote;
