const express = require("express");
const app = express();
const { port } = require("./config");

//Routes
const apiRouter = require("./routes/api");
app.use("/", apiRouter);

//Server
app.listen(port, () => {
	console.log(`server is listening... http://localhost:${port}`);
});
