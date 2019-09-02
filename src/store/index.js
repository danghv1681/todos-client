import React from 'react'
import useGlobalHook from '../utils/useGlobalHook'

import * as actions from '../actions'

const initialState = {
  counter: 0,
  status: "INITIAL",
  messages: []
}

const initializer = (store) => {
  store.actions.messages.getAllMessages(store)
}

const useGlobal = useGlobalHook(React, initialState, actions, initializer)

export default useGlobal