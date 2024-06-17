let messages = [{"name": "John", "message":"Hey you"}, {"name": "Jimmy", "message":"See you"}, {"name": "Jacob", "message":"Fits daein?"}];

const messageStore = () => ({
    addMessage: (message) => { messages.unshift(message); },
    getMessages: () => messages,
});

module.exports = {messageStore};