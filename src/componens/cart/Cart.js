import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Paper, Toolbar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CartList from "./CartList";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
      marginTop: -45,
    },
    item: {
      padding: 20,
    },
    header: {
      color: "gray",
    },
    subtotal: {
      padding: 10,
    },
    totalwrapper: {
      padding: 20,
    },
    yellow:{
      color:'#ff8c00'
    }
  })
);

export const Cart = () => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.root} elevation={10}>
        <Typography variant="h2">Cart</Typography>
        <Typography variant="h6">Your order(2 items)</Typography>
        <Grid container justify="space-between" className={classes.header}>
          <Grid item md={6}>
            <Typography variant="h6">ITEM</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">QUANTITY</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">UNIT PRICE</Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6">SUBTOTAL</Typography>
          </Grid>
        </Grid>
        <CartList />
        <Paper className={classes.totalwrapper} elevation={8}>
          <Grid container justify="flex-end">
            <Grid item md={4}></Grid>
            <Grid
              md={4}
              item
              style={{ display: "flex", justifyContent: "space-between" }}
              spacing={2}
            >
              <Paper className={classes.subtotal} elevation={4}>
                <Typography variant="h6">Subtotal</Typography>
              </Paper>
              <Paper className={classes.subtotal} elevation={4}>
                <Typography variant="h6">Ksh 500</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Toolbar></Toolbar>
          <Grid container justify="flex-end">
            <Grid item md={4}></Grid>
            <Grid
              md={4}
              item
              style={{ display: "flex", justifyContent: "space-between" }}
              spacing={2}
            >
              <Paper className={classes.subtotal} elevation={4}>
                <Typography variant="h6">Total</Typography>
              </Paper>
              <Paper className={classes.subtotal} elevation={4}>
                <Typography variant="h6">Ksh 500</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Toolbar></Toolbar>
          <Grid container justify="flex-end">
            <Grid
              md={6}
              item
              style={{ display: "flex", justifyContent: "space-between" }}
              spacing={2}
            >
              <Paper className={classes.subtotal}>
                <Typography variant="h6" className={classes.yellow}>Continue Shopping</Typography>
              </Paper>
              <Paper className={classes.subtotal} >
                <Typography variant="h6" className={classes.yellow}>Proceed to checkout</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </Container>
  );
};
