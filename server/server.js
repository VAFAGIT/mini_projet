const express = require('express');
const cors = require('cors');
const path = require('path');
require("dotenv").config();
const port = process.env.PORT || 5000;
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api/file", require("./routes/fileRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

//listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

