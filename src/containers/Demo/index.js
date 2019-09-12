import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import useGlobal from '../../store'

import Chat from './Chat'
import Login from '../../components/Chat/Login/Login'
import Signup from '../../components/Chat/Signup'

const Demo = () => {
  const [globalState, globalActions] = useGlobal()
  // console.log('global...', globalState, globalActions)
  return (
    <Login loginAction={globalActions.messages.login}/>
  )
}

export default Demo