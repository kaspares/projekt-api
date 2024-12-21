const mongoose = require("mongoose")

//schemat produktu
const paczkomatSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    miasto: String,
    adres: String,
    pojemnosc: Number
})

module.exports = mongoose.model("Paczkomat", paczkomatSchema)