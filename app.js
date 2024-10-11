const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', (req,res)=>{
    res.json({message: "welcome to bookstore"});
})

module.exports = app;