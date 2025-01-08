const mongoose = require("mongoose");
const Kurier = require("../routes/models/kurier");

exports.kurierzy_get_all = (req, res, next) => {
    Kurier.find()
    .then(kurierzy => {
        res.status(200).json({
            wiadomość: "Liszta wszystkich kurierów",
            kurierzy: kurierzy
        });
    }).catch(err => res.status(500).json({ error: err })
)};

exports.kurierzy_add_new = (req, res, next) => {
    const kurier = new Kurier({
        _id: new mongoose.Types.ObjectId(),
        imie: req.body.imie,
        nazwisko: req.body.nazwisko
    });

    kurier.save()
    .then(result => {
        res.status(201).json({
            wiadomość: "Nowy kurier został dodany!",
            kurier: result
        });
    }).catch(err => res.status(500).json({error: err}));
};


exports.kurierzy_get_by_id = (req, res, next) => {
    const id = req.params.kurierId;
    Kurier.findById(id)
    .then(result => {
        if (result) {
            res.status(200).json({
                wiadomość: `Szczegóły kuriera o numerze ${id}`,
                kurier: result
            });
        }
        else {
            res.status(404).json({
                wiadomość: `Nie znaleziono kuriera o numerze ${id}`
            });
        }
    }).catch(err => res.status(500).json({ error: err }));
};

exports.kurierzy_update = (req, res, next) => {
    const id = req.params.kurierId;
    const updatedFields = {
        imie: req.body.imie,
        nazwisko: req.body.nazwisko
    };


    Kurier.findByIdAndUpdate(id, updatedFields, { new: true })
    .then(result => {
        if (result) {
            res.status(200).json({
                wiadomość: `Zaktualizowano kuriera o numerze ${id}`,
                updatedKurier: result
            });
        }
        else {
            res.status(404).json({
                wiadomość: "Nie znaleziono kuriera"
            });
        }
    })
    .catch(err => res.status(500).json({ error: err }));
};

exports.kurierzy_delete = (req, res, next) => {
    const id = req.params.kurierId;
    Kurier.findByIdAndDelete(id)
    .then(result => {
        if (result) {
            res.status(200).json({
                wiadomość: `Usunięto kuriera o numerze ${id}`
            });
        } 
        else {
            res.status(404).json({
                wiadomość: "Nie znaleziono kuriera"
            });
        }
    })
    .catch(err => res.status(500).json({ error: err }));
};

