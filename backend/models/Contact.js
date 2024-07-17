const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
       
     },
     number: {
        type: String,
        required: true,
     },
     company: {
        type: String,
     },
     service: [
        {
            type: String,
        }
    ],
     budget: {
        type: String,
        enum : ['Less than > $500', '$500 - $1,000', '$1,001 - $1500', '$1500 - $2,000'],
     },
     details: {
        type: String,
    },
     file: {
        type: String, 
        default: '' ,
      }
}, {timestamps: true});


const Contact = model("Contact", contactSchema);
module.exports = Contact;