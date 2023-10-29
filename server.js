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


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/static/index.html"))
    res.header("content-type", "application/json")
})

app.post("/main", function (req, res) {
    let pliki = []
    let cwiczenia1 = []
    let cwiczenia2 = []
    let week1 = {}
    let week2 = {}
    // fs.readdirSync(__dirname + "/static/cwiczenia", function (err, files) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(files)
    //     pliki = files
    //     console.log(pliki)

    //     res.header("content-type", "application/json")
    //     res.json(JSON.stringify(pliki, null, 5))
    // })

    fileObjs1 = fs.readdirSync(__dirname + "/static/cwiczenia/Week_1", { withFileTypes: false });
    fileObjs2 = fs.readdirSync(__dirname + "/static/cwiczenia/Week_2", { withFileTypes: false });

    console.log("\nPliki w tygodniu 1:");
    fileObjs1.forEach(file => {
        cwiczenia1.push(file)
    });

    console.log("\nPliki w tygodniu 2:");
    fileObjs2.forEach(file => {
        cwiczenia2.push(file)
    });

    pliki = { "Week_1": cwiczenia1, "Week_2": cwiczenia2 }

    console.log(pliki);
    res.header("content-type", "application/json")
    res.json(JSON.stringify(pliki, null, 5))
})



app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})