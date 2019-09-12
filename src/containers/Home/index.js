import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div><Link to="/demo/">Demo</Link></div>
      <div><Link to="/todos/">todos</Link></div>
    </div>
  )
}

export default Home