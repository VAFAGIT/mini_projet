const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

   name:{
         type: String,
            required: [true, "Please provide a name"],
   },
    path:{
        type: String,
        required: [true, "Please provide a path"],
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("File", fileSchema);