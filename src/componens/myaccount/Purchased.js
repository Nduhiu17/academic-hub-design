import React from "react";
import AccountLayout from "./AccountLayout";
import { Grid, Paper } from "@material-ui/core";

const Purchased = () => {
  return (
    <AccountLayout>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Paper>aa</Paper>
        </Grid>
        <Grid item md={6}>
          <Paper>
              bb
          </Paper>
        </Grid>
      </Grid>
    </AccountLayout>
  );
};

export default Purchased;
