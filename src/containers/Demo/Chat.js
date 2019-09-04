import React, { useState } from 'react'
import useGlobal from '../../store'

const Chat = () => {
  const [globalState, globalActions] = useGlobal()
  const [text, setText] = useState('')
  // console.log('global state...', globalState)
  const { messages } = globalState
  return (
    <main>
      <h1>Welcome to Feathers</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        globalActions.messages.createMessage({text})
        setText('')
      }}>
        <input
          type="text"
          placeholder="Enter message here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>

      <h2>Here are the current messages:</h2>
      <ul>
        {
          messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))
        }
      </ul>
    </main>
  )
}

export default Chat
