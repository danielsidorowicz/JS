const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const path = require("path")
const fs = require("fs")
let pliki = []

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/static/index.html"))
    res.header("content-type", "application/json")
})

app.post("/main", function (req, res) {
    fs.readdir(__dirname + "/static/cwiczenia", function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log(files)
        pliki = files
        console.log(pliki)

        res.header("content-type", "application/json")
        res.json(JSON.stringify(pliki, null, 5))
    })


})



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})