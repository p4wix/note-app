// port (process.env.PORT) numer portu który może znajdować sie na serwerze zawnetrzynm będzie inny niż na szytwno 3000 i odbieramy go w ./index.js
module.exports = {
	port: process.env.PORT || 3000,
};
