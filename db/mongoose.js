const mongoose = require("mongoose");
const { database } = require("./config");

//db coonnect stałe połączenia które się nie zamyka
//opcje w obiektcie zeby nie zwracało warninga
mongoose.connect(database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
