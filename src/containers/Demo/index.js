import React from 'react'
import useGlobal from '../../store'

const Demo = () => {
  const [globalState, globalActions] = useGlobal()
  console.log('global state...', globalState)
  const { messages } = globalState
  return (
    <div>
      <p>
        counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={() => globalActions.counter.addToCounter(1)}>
        +1 to global
      </button>
      <ul>
        {
          messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Demo