const mongoose = require("mongoose");

// Schemat Przesyłki
const paczkaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    kodPaczki: String, 
    kurier: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Kurier" 
    },
    paczkomat: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Paczkomat"     
    },
    status: String 
});

module.exports = mongoose.model("Paczka", paczkaSchema);