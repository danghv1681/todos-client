import React from 'react'
import useGlobal from '../../store'

import Chat from './Chat'

const Demo = () => {
  const [globalState, globalActions] = useGlobal()
  // console.log('global state...', globalState)
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
      <Chat />
    </div>
  )
}

export default Demo