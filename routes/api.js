const express = require("express");
const router = express.Router();

const testActions = require("../actions/api/test");

//pod główną scieżka przyjmuj tą akcje
router.get("/", testActions.homepage);

module.exports = router;
