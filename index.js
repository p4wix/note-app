const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");

//db - wczytujemy po to aby plik sie uruchomił
require("./db/mongoose");

//Routes
app.use("/", apiRouter);

//Server
app.listen(port, () => {
	console.log(`server is listening... http://localhost:${port}`);
});
