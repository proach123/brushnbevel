import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Private from './components/Private/Private';
import Dashboard from './components/Dashboard/Dashboard';
import Team from './components/Team/Team';
import Admin from './components/Admin/Admin';
import Checkout from './components/Gallery/Checkout';


export default (
    <Switch>
        <Route path='/store' component={Checkout}/>
        <Route path='/private' component={Private}/>
        <Route path='/login' component={Login}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/team' component={Team}/>
        <Route path='/admin' component={Admin}/> 
        <Route exact path='/' component={Dashboard}/>
    </Switch>
)

