// const MongoClient = require("mongodb").MongoClient;

// const is_heroku = process.env.IS_HEROKU || false;


// const herokuURI = "mongodb://localhost/?authSource=admin&retryWrites=true&w=majority;"

// const localURI = "mongodb://localhost/?authSource=admin&retryWrites=true&w=majority;"

// if (is_heroku) {
// 	var database = new MongoClient(herokuURI, {useNewUrlParser: true, useUnifiedTopology: true});
// }
// else {
// 	var database = new MongoClient(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
// }

// module.exports = database;
		
const database = require("mongoose");
const is_qoddi = process.env.IS_QODDI || false;
const databaseName = "lab_example"
const qoddiURI =
"mongodb+srv://admin:TJegPTvGhuNMMnPL@cluster0.ztfkq3k.mongodb.net/?retryWrites=true&w=majority"
const localURI =
"mongodb://127.0.0.1/?authSource=admin&retryWrites=true&w=majority"
if (is_qoddi) {
database.connect(qoddiURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
else {
database.connect(localURI, {useNewUrlParser: true, useUnifiedTopology: true});
}
