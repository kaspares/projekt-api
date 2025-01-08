//zmienne środowiskowe
require('dotenv').config()

//importuje express
const express = require("express")

// tworzę instancje expressa
const app = express()

//połączenie z bazą danych
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5jqbx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)

//logger
const morgan = require("morgan")
app.use(morgan("dev"))

// parsowanie body
const bodyParser = require("body-parser")
app.use(bodyParser.json())  // od tej pory w req.body mam informacje z body

// importuje routy

const userRoutes = require("./api/routes/users")
const paczkaRoutes = require("./api/routes/paczki")
const paczkomatyRoutes = require("./api/routes/paczkomaty")
const kurierzyRoutes = require("./api/routes/kurierzy")

app.use("/paczkomaty", paczkomatyRoutes)
app.use("/paczki", paczkaRoutes)
app.use("/kurierzy", kurierzyRoutes)
app.use("/users", userRoutes)
//Wywołuje się gdy nie odnajdzie routu 
app.use((req, res, next) =>{
    res.status(400).json({wiadomość: "Nie odnaleziono"})
}) 

module.exports = app