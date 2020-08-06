import React from "react";
import Main from "./componens/Main";
import { Typography } from "@material-ui/core";
import Layout from "./componens/Layout";

function App() {
  return (
    <Typography>
      <Layout>
        <Main />
      </Layout>
    </Typography>
  );
}

export default App;
