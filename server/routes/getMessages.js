const getMessages = (messageStore) => (_request, result) => {
    try {
        const messages = messageStore.getMessages();
        result.json(messages);
    } catch (error){
        sessionStorage.error("Error: " + error)
    }
}

module.exports = {getMessages};