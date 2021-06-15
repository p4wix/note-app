import React, { useState } from "react";

function Note(props) {
	const [displayDescription, setDisplayDescription] = useState(false);
	const { title, body, id } = props.note;

	const editHandler = () => {
		props.onEdit({
			title: props.title,
			body: props.body,
			id: props.id,
		});
	};

	return (
		<div key={props.id} className="note">
			<p onClick={() => setDisplayDescription((prevState) => !prevState)}>
				{title}
			</p>
			{displayDescription ? <div className="description">{body}</div> : null}
			<button onClick={editHandler}>Edytuj</button>
			<button className="delete" onClick={() => props.onDelete(id)}>
				Usuń
			</button>
		</div>
	);
}

export default Note;
