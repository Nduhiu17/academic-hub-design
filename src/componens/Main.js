import React from "react"
import MainContent from "./MainContent"

import {Router, Route, Switch} from 'react-router-dom'
import history from "../history"
import { Login } from './auth/login/Login';
import { NotFound } from './NotFound';
import { Cart } from './Cart';
import { MyAccount } from './myaccount/MyAccount';



function Main() {
    return(
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={MainContent}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/cart' component={Cart}></Route>
                    <Route exact path='/account' component={MyAccount}></Route>
                    <Route exact  component={NotFound}></Route>
                </Switch>
            </Router>
    )
}

export default Main;