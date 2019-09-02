import { type } from "os";

function setState(store, newState, afterUpdateCallback) {
  const listenersLength = store.listeners.length
  store.state = { ...store.state, ...newState }
  for (let i = 0; i < listenersLength; i++) {
    store.listeners[i](store.state)
  }
  afterUpdateCallback && afterUpdateCallback()
}

function useCustom(store, React) {
  const newListener = React.useState()[1]
  const oldState = store.state
  React.useEffect(() => {
    store.listeners.push(newListener)
    oldState !== store.state && newListener(store.state)
    return () => {
      store.listeners = store.listeners.filter(listener => listener !== newListener )
    }
  }, [])
  return [store.state, store.actions]
}

function associateActions (store, actions) {
  const associatedActions = {}
  Object.keys(actions).forEach(key => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store)
    }
    if (typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store, actions[key])
    }
  })
  return associatedActions
}

const useStore = (React, initialState, actions, initializer) => {
  const store = { state: initialState, listeners: [] }
  store.setState = setState.bind(null, store)
  store.actions = associateActions(store, actions)
  if (initializer) {
    // console.log('initializer...', initializer)
    initializer(store)
  }
  // console.log('store final...', store)
  return useCustom.bind(null, store, React)
}

export default useStore