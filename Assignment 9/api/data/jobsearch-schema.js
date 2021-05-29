const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    unit: String,
    street: String,
    pincode: {
        type: Number,
        min: 100000,
        max: 999999
    }
});

const JobsearchSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    salary: Number,
    location: LocationSchema,
    description: String,
    experience: Number,
    skills: [String],
    postDate: Date,
});

mongoose.model("Jobsearch", JobsearchSchema, "Jobsearches");
mongoose.model("Location", LocationSchema);
//mongoose.model("Skill", SkillSchema)
//mongoose.model("Cast", CastSchema);



    // min: 1,
    // max: 5,
    // default: 1