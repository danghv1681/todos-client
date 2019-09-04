import app from '../api'

export const getAllMessages = async (store) => {
  const status = "LOADING"
  store.setState({ status })
  try {
    const messages = await app.service('messages').find()
    // console.log('messages...', messages)
    const isMegsEmpty = messages.length == 0
    const status = isMegsEmpty ? "EMPTY" : "SUCCESS"
    store.setState({ messages, status })
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? "NOT_FOUND" : "ERROR";
    store.setState({ status });
  }
}

export const createMessage = async (store, data) => {
  try {
    console.log('here...')
    await app.service('messages').create({ text: data.text })
    getAllMessages(store)
  } catch (error) {
    console.log('error...', error)
  }
}

export const login = async (store) => {
  try {
    const users = await app.service('authentication').find({})
    // const user = await app.reAuthenticate()
    console.log('user...', users)
    if (user) { store.setState({ isAuthenticated: true }) }
  } catch (error) {
    await app.authenticate({
      strategy: 'local',
      email: 'hello@feathersjs.com',
      password: 'supersecret',
    })
    store.setState({ isAuthenticated: true })
  }
}
