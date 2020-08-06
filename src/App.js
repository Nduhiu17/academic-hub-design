import React from "react";
import { Typography } from "@material-ui/core";
import Layout from "./componens/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import MainContent from "./componens/MainContent";
import { Login } from "./componens/auth/login/Login";
import { Cart } from "./componens/cart/Cart";
import { MyAccount } from "./componens/myaccount/MyAccount";
import { NotFound } from "./componens/NotFound";

function App() {
  return (
    <BrowserRouter history={history}>
      <Typography>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainContent}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/account" component={MyAccount}></Route>
            <Route exact component={NotFound}></Route>
          </Switch>
        </Layout>
      </Typography>
    </BrowserRouter>
  );
}

export default App;
