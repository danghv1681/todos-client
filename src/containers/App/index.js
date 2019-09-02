import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../Home'
import Demo from '../Demo'
import Todos from '../Todos'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/demo/">Demo</Link>
                            </li>
                            <li>
                                <Link to="/todos/">Todos</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/todos" component={Todos} />
                </div>
            </Router>
        )
    }
}