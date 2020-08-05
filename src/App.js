import React from "react";
import  Header from "./componens/Header" 
import MainContent from "./componens/MainContent"
import { Typography } from "@material-ui/core";


function App() {
  return (
    <Typography>
      <Header />
      <MainContent/>
    </Typography>
  );
}

export default App;
