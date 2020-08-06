import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { Paper } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
    },
    footer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      backgroundColor: "#fff",
      color: "inherit",
    //   boxShadow: "none",
    },
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <Paper>
        <AppBar position="static" className={classes.footer}>
          <Toolbar>
            <Typography component="span">&copy; Academic Hub</Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  );
}
