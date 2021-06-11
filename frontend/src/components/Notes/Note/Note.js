import React from "react";

function Note({ note }) {
	return (
		<div key={note.id} className="note">
			<p>{note.title}</p>
			<div className="description">{note.body}</div>
			<button>edytuj</button>
			<button className="delete">usuń</button>
		</div>
	);
}

export default Note;
