const addMessage = (messageStore) => (request, result) => {
    try {
        messageStore.addMessage(request.body);
        result.json(request.body);
    } catch (error){
        console.error("Error: " + error)
    }
}

module.exports = { addMessage};