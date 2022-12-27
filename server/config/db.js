const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB Connection Successful");
});

db.on("error", (err) => {
    console.log("MongoDB Connection Failed");
});



