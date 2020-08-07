import React from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import MainContent from "./componens/MainContent";
import { Login } from "./componens/auth/login/Login";
import { Cart } from "./componens/cart/Cart";
import { MyAccount } from "./componens/myaccount/MyAccount";
import { NotFound } from "./componens/NotFound";
import { Register } from "./componens/auth/register/Register";
import Admin from './componens/admin/Admin';

function App() {
  return (
    <BrowserRouter history={history}>
      <Typography>
        <Switch>
          <Route exact path="/" component={MainContent}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/account" component={MyAccount}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact component={NotFound}></Route>
        </Switch>
      </Typography>
    </BrowserRouter>
  );
}

export default App;
