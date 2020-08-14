import React, { Suspense } from "react";
import { Typography } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "./history";
import LinearProgress from "@material-ui/core/LinearProgress";
import routes from "./routes";

function App() {
  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });
  return (
    <BrowserRouter history={history}>
      <Typography>
        <Suspense fallback={<LinearProgress />}>
          <Switch>{menu}</Switch>
        </Suspense>
      </Typography>
    </BrowserRouter>
  );
}

export default App;
