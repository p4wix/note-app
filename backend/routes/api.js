const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/notesActions");

//Definiujemy endpointy i to jakie akcje mają się przy nich wykonywać (get do pobieranie danych z bazy)
router.get("/notes", noteActions.getAllNotes);
//Pobieranie konkretnej notatki
router.get("/notes/:id", noteActions.getNote);
//Zapisywanie notatek (post służy do zapisywania nowych danych)
router.post("/notes", noteActions.saveNote);
//Edytowanie notatek  (put służy do edytowania danych)
router.put("/notes/:id", noteActions.updateNote);
//Usuwanie notatek (delete do usuwania danych z bazy)
router.delete("/notes/:id", noteActions.deleteNote);

module.exports = router;
