import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login/Login'
import Private from './components/Private/Private'
import Dashboard from './components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route path='/private' component={Private}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/' component={Dashboard}/>
    </Switch>
)