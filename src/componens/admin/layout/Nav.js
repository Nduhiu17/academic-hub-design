import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#fff", color: "#F95700FF" }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <ArrowBackIosIcon />
            </Link>
          </IconButton>

          <Link to="/">BACK TO WEBSITE</Link>
        </Typography>

        <Button color="inherit">logout</Button>
      </Toolbar>
    </AppBar>
  );
};
