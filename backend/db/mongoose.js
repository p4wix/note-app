const mongoose = require("mongoose");
const { database } = require("../config");

//db coonnect stałe połączenia które się nie zamyka
//Opcje w obiektcie zeby nie zwracało warninga
mongoose.connect(database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
