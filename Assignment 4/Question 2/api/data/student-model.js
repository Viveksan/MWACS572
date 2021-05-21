const mongoose = require("mongoose");
//schema and validation
const studentSchema = new mongoose.Schema({

name: String,
gpa: Number,
address: {
    city: String,
    state: String,
    zip: Number
    }
});

//Compile model
mongoose.model("Student",studentSchema, "student");