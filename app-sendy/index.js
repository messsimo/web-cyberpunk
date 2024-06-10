// Include all librares
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extends: true}))
app.use(express.static("public"))

// Empty array for notes
const notes = []

// Create main page
app.get("/", (req, res) => {
    res.render("main")
})

// Create about us page
app.get("/about", (req, res) => {
    res.render("about")
})

// Create notes page
app.get("/notes", (req, res) => {
    res.render("notes", { notes })
})

// Create cloud page for upload notes
app.post("/notes", (req, res) => {
    const description = req.body.description

    if (description.trim() === "")
        res.redirect("/notes")
    else 
        notes.push(description)
        res.redirect("/notes")
})

// Upload the server
var PORT = 2000
app.listen(PORT, () => {
    console.log(`The server is running: http://localhost:${PORT}`)
})





// Logic for adding a note:
// We create an empty array for all notes, then we get the text from textarea with name="description"
// And if there is no text -> reload the page
// If there is text -> we send it to notes.ejs and there we iterate through the array through the forEach method and display it on the screen

// Логика добавления заметки:
// Мы создаем пустой массив для всех заметок, после мы из textarea с name="description" получаем текст
// И если текст не будет -> перезагружаем страницу
// Если текст есть -> мы его посылаем в notes.ejs и там перебираем массив через метод forEach и и выводим на экране