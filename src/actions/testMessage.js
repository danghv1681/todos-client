// import axios from 'axios'
// const feathers = require('@feathersjs/feathers')
// const rest = require('@feathersjs/rest-client')

// const app = feathers()
// const restClient = rest('http://localhost:3030')

// app.configure(restClient.axios(axios))
import app from '../api'

export const getAllMessages = async (store) => {
  const status = "LOADING"
  store.setState({ status })
  try {
    const messages = await app.service('messages').find()
    console.log('messages...', messages)
    const isMegsEmpty = messages.length == 0
    const status = isMegsEmpty ? "EMPTY" : "SUCCESS"
    store.setState({ messages, status })
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    const status = isError404 ? "NOT_FOUND" : "ERROR";
    store.setState({ status });
  }
}
