const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

//db - wczytujemy po to aby plik sie uruchomił
require("./db/mongoose");

//Parsery - czyli w jaki sposób nasza aplikkacja ma przetwarzac rozne rzeczy
//Content-type: aplitation/json - w taki sposób wysyłane sa dane z fontendu
app.use(bodyParser.json());

//Routes (/api zostanie automatycznie dodane do kazdej sciarzki w apiRoute)
app.use("/api", apiRouter);

//Server
app.listen(port, () => {
	console.log(`server is listening... http://localhost:${port}`);
});
