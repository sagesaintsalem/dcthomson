const express = require('express');
const app = express();
app.use(express.json());
let messages = [{"name": "John", "message":"Hey you"}, {"name": "Jimmy", "message":"See you"}, {"name": "Jacob", "message":"Fits daein?"}];

app.get("/messages", (_request, result) => {
    try {
        result.json(messages);
        localStorage.setItem(messages);
    } catch (error){
        console.error("Error: " + error)
    }
})

app.post("/messages", (request, result) => {
    try {
        messages.unshift(request.body);
        result.json(request.body);
        localStorage.setItem(messages);
    } catch (error){
        console.error("Error: " + error)
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})

module.exports = app;