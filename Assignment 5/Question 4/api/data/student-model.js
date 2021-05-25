const mongoose= require("mongoose");

const addressSchema= new mongoose.Schema({
    city:{
        type: String,    
    },
    street:{
        type: String,
    },
    State:{
        type: String,       
    },
    zipcode:{
        type: Number,    
    }
});

const studentSchema= new mongoose.Schema({
    name: {
        type: String,
    },
    gpa: {
        type: Number,
        min:0,
        max:4,
        "deafault": 0,
    },
    studentId:{
        type: Number,
    }
});

mongoose.model("Student", studentSchema);
mongoose.model("Address", addressSchema);