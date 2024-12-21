const mongoose = require("mongoose")

//schemat produktu
const kurierSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    imie: String,
    nazwisko: String
})

module.exports = mongoose.model("Kurier", kurierSchema)