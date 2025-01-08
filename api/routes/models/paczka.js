const mongoose = require("mongoose");

// Schemat Przesyłki
const paczkaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    kodPaczki: String, // Kod przesyłki
    kurier: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Kurier" // Referencja do Kuriera
    },
    paczkomat: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Paczkomat" // Referencja do Paczkomatu
    },
    status: String // Opcjonalnie: status przesyłki
});

module.exports = mongoose.model("Paczka", paczkaSchema);