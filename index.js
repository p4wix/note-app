const express = require("express");
const app = express();
const config = require("./config");
const apiRouter = require("./routes/api");

//Routes
app.use("/", apiRouter);

//Server
app.listen(config.port, () => {
	console.log(`server is listening... http://localhost:${config.port}`);
});
