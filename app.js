const express = require("express");
const app = express();
const cors = require('cors');
const usersRouter = require("./app/routes/user.route")

app.use(cors());
app.use(express.json());

app.use('/api/user', usersRouter);
app.use('/', (req,res)=>{
    res.json({message: "welcome to bookstore"});
})

module.exports = app;
