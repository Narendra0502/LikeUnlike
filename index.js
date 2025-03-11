const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const connectdb = require('./config/database');

app.use(express.json());

const routeslikeunlike = require('./routes/routesfile');
app.use("/api/v1", routeslikeunlike);

connectdb();

app.listen(PORT, () => {
    console.log(`App is started at ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(`<h1>New app for like and unlike</h1>`);
});
