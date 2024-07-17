const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    technology: [
        {
            type: String,
            required: true
        }
    ],
    estimatedHour: {
        type: Number,
        required: [true, 'Estimated hour is required!'],
        min: [1, 'Estimated hour must be at least 1 hour!']
    },
    deadline: {
        type: Date,
        required: [true, 'Deadline is required!']
    },
    status: {
          type: String,
          enum : ["Pending", "Complete"],
          default: "Pending",
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
}, { timestamps: true });

 projectSchema.path("technology").validate({
    validator: function (value) {
      return value.length > 0;
   },
   message: (props) => `Select at least one technology!`,
 });

const Project = model("Project", projectSchema);
module.exports = Project;
