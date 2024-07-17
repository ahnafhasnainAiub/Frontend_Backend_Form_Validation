const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        trim: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Invalid email format!' ]
    },
    country: {
        type: String,
        required: [true, 'Country is required!'],
        trim: true
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
}, { timestamps: true });

clientSchema.path('name').validate({
    validator: function(value) {
        return value.length <= 20;
    },
    message: props => `${props.value} exceeds the 20 character limit.`
});

const Client = model("Client", clientSchema);
module.exports = Client;

