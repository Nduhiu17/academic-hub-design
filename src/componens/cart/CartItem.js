import React from "react";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import wordImg from "../../assets/images/download.png";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    item: {
      padding: 20,
      marginBottom: 20,
    },
    header: {
      color: "gray",
    },
  })
);
export default function CartItem() {
  const classes = useStyles();
  return (
    <Paper className={classes.item} elevation={8}>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Paper>
                <img
                  src={wordImg}
                  alt=""
                  style={{ width: "100%" }}
                  className="file-image"
                />
              </Paper>
            </Grid>
            <Grid md={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              lobortis gravida tempus. Etiam et aliquam magna.
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          1
        </Grid>
        <Grid item md={2} style={{ color: "#ff8c00" }}>
        <AttachMoneyIcon />
          100
        </Grid>
        <Grid item md={2} style={{ color: "#ff8c00" }}>
          <AttachMoneyIcon />
          800
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="flex-end">
        <Grid item md={2} xs={12} sm={12}>
          <Paper style={{ padding: 10 }} elevation={8}>
            <FavoriteBorderIcon color="secondary" />
            <Button>save items</Button>
          </Paper>
        </Grid>
        <Grid md={2} xs={12} sm={12}  style={{ marginTop: 8 }}>
          <Paper
            style={{ padding: 10 }} elevation={8}
          >
            <RemoveShoppingCartIcon color="secondary" />
              <Button>Remove</Button>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
