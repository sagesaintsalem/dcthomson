const express = require('express');
const {messageStore} = require('./repository/messageRepository')
const { getMessages } = require ('./routes/getMessages');
const  { addMessage } = require ('./routes/addMessage');


const app = express();
app.use(express.json());
app.listen(5000, () => {console.log("Server started on port 5000")})

const dataStore = messageStore()
app.get("/messages", getMessages(dataStore))
app.post("/messages", addMessage(dataStore))

module.exports = app;