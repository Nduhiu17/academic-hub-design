import React from "react";
import AccountLayout from "./AccountLayout";
import { Grid, Paper, CardHeader, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  column: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const AccountDetails = () => {
  const classes = useStyles();
  return (
    <AccountLayout>
      <Grid container spacing={2}>
        <Grid container justify="flex-start">
          <Grid item md={6}>
            <CardHeader
              title="Account Overview
            "
            />
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography>Account Details</Typography>
                <Divider variant="fullWidth" />
                <Typography className={classes.column}>
                  <Typography>Name</Typography>
                  <Typography>Antony Nduhiu</Typography>
                </Typography>
                <Typography className={classes.column}>
                  <Typography>Email</Typography>
                  <Typography>nduhiu254@gmail.com</Typography>
                </Typography>
                <Typography className={classes.column}>
                  <Typography>Username</Typography>
                  <Typography>nduhiu254</Typography>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Change Password</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography>Personal statisics</Typography>
                <Divider variant="fullWidth" />
                <Typography className={classes.column}>
                  <Typography>Toal Purchased Items</Typography>
                  <Typography>30</Typography>
                </Typography>
                <Typography className={classes.column}>
                  <Typography>Total saved items</Typography>
                  <Typography>15</Typography>
                </Typography>
                <Typography className={classes.column}>
                  <Typography>Failed Transactions</Typography>
                  <Typography>5</Typography>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </AccountLayout>
  );
};

export default AccountDetails;
