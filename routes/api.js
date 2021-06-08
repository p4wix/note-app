const express = require("express");
const router = express.Router();

const noteActions = require("../actions/api/notes");

//pod główną scieżka przyjmuj tą akcje
router.get("/", noteActions.saveNote);

module.exports = router;
