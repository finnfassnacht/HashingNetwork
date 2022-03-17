const express = require("express");
const app = express();
const datastore = require("nedb")
app.use(express.static("www"));
app.use(express.json());
PORT = 3000;
const database = new datastore("epicshelter.db")
database.loadDatabase()
app.post("/hashes", (req,res) => {
    var client_data = (req.body);
    database.insert(client_data);
    console.log(client_data)
    res.end()
});
app.listen(PORT, () => {
    console.log("Server up!");
})
