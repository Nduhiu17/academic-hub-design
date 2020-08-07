import React from "react";
import { Paper, Typography, Toolbar, Grid, Container } from "@material-ui/core";

const MainContent = () => {
  return (
    <Container>
      <Toolbar></Toolbar>
      <Grid container spacing={2}>
        <Grid item md={3} sm={4} xs={4}>
          <Paper elevation={4}>
            <Typography>side bar</Typography>
          </Paper>
        </Grid>
        <Grid item md={9} sm={8} xs={8}>
          <Paper elevation={4}>Side bar</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContent;
