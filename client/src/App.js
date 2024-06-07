import React, {useEffect, useState} from 'react'
import "./App.css"

function App() {
  

  const [messages, setMessages] = useState([{}]);
  const [username, setUsername] = useState("");
  const [userMessage, setUserMessage] = useState("");



  useEffect(() => {
    fetch("/messages").then(
      response => response.json()
    ).then(
      data => {
        setMessages(data)
      }
    )
  }, [])

  // This takes input from the Name field and sets it to Username
  const handleUsername = (event) => {
    setUsername(event.target.value)
  };

  // This takes input from the Message field and sets it to UserMessage
  const handleUserMessage = (event) => {
    setUserMessage(event.target.value)
  };

  const resetForm = () => {
    setUsername('')
    setUserMessage('')
};

  //This takes information from the form and posts it to Messages before refreshing the Message feed
  const submitForm = async (event) => {
    event.preventDefault();
    if(username && userMessage) {
      const payload = {
        name: username,
        message: userMessage
      }
      await fetch("/messages", {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      fetch("/messages").then(
        response => response.json()
      ).then(
        data => {
          setMessages(data)
        }
      )
      resetForm();
    } 
  }

  return (
    <body>
      <div>
        <form value="message_form" onSubmit={submitForm}>
          <input type="text" placeholder='Name' id="username" value={username} onChange={handleUsername} ></input>
          <textarea placeholder='Say something...' id="userMessage" value={userMessage} onChange={handleUserMessage}></textarea>
          <input type='submit' value="Submit Message"></input>
        </form>
      </div>

      <div className='messageFeed'>
      {(!messages) ? (
        <p>Loading...</p>
      ) : (messages.map((message, i) => (
        <p key={i}className='messageFeedMessage'><strong>{message.name}:</strong> {message.message}</p>
      )))}
      </div>
    </body>
  )
}

export default App