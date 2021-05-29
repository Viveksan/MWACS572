const mongoose = require("mongoose");

const CastSchema = mongoose.Schema({
    actor: String,
    actress: String,
    director: String,
    producer: String
});

const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
   // castandcrew: CastSchema
});

mongoose.model("Movie", MovieSchema, "movies");
//mongoose.model("Cast", CastSchema);



    // min: 1,
    // max: 5,
    // default: 1