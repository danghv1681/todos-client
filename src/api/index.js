import axios from 'axios'
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'

const app = feathers()
const restClient = rest('http://localhost:3030')

app.configure(restClient.axios(axios))
// app.configure(feathers.authentication({
//   storage: window.localStorage,
// }))


export default app