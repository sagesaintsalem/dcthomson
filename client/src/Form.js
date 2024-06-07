import React, {useEffect, useState} from 'react'

function Form() {
    const [messages, setMessages] = useState([{}]);
    const [username, setUsername] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value)
      };
    
      const handleUserMessage = (event) => {
        setUserMessage(event.target.value)
      };
    
      const resetForm = () => {
        setUsername('')
        setUserMessage('')
    };
    
      const submitForm = (event) => {
        event.preventDefault();
        const payload = {
          username: username,
          userMessage: userMessage
        }
        console.log(payload)
        // resetForm();
      }

    return (
        <>
        <form value="message_form">
        <input type="text" placeholder='Name' id="username" value={username} onChange={handleUsername}></input>
        <input type="text" placeholder='Say something...' id="userMessage" value={userMessage} onChange={handleUserMessage}></input>
        <button type='submit' onClick={submitForm}>Submit</button>
      </form>
        </>
    )

}

export default Form;