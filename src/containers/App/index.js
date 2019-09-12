import React, { Component } from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../Home'
import Demo from '../Demo'
import Todos from '../Todos'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default class App extends Component {
    render() {
        return (
            <AppWrapper>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/demo" component={Demo} />
                        <Route path="/todos" component={Todos} />
                    </Switch>
                </Router>
            </AppWrapper>
        )
    }
}