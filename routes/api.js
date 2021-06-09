const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/notesActions");

//definiujemy endpointy i to jakie akcje mają się przy nich wykonywać (get do pobieranie danych z bazy)
router.get("/notes", noteActions.getAllNotes);
//pobieranie konkretnej notatki
router.get("/notes/:id", noteActions.getNote);
//zapisywanie notatek (post służy do zapisywania nowych danych)
router.post("/notes", noteActions.saveNote);
//edytowanie notatek  (put służy do edytowania danych)
router.put("/notes/:id", noteActions.updateNote);
//usuwanie notatek (delete do usuwania danych z bazy)
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
