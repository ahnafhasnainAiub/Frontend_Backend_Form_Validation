const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const uuid = require('uuid');

const employeeSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        trim: true,  
        lowercase: true,  
        match: [ /^\S+@\S+\.\S+$/, 'Invalid email format!' ]  

    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    employeeId: {
        type: String,
        default: function() {
           
            let uuidString = uuid.v4().replace(/-/g, ''); 
            return 'MW-' + uuidString.substring(0, 8);
        },

    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
}, { timestamps: true });


employeeSchema.path('email').validate({
    validator: function(value) {
        return value.length <= 20;
    },
    message: props => `${props.value} exceeds the 20 character limit.`
});

 

const Employee = model("Employee", employeeSchema);
module.exports = Employee;
