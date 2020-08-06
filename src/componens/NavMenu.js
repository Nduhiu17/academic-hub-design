import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Cart } from './Cart';

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
  AppBar: {
    backgroundColor: "transparent",
  },
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

export default function NavMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Academic Hub
          </Typography>
          <IconButton>
                <Button
                className={classes.badge}
                >
                My Account
                </Button>
            </IconButton>
           <IconButton>
                <Button
                className={classes.badge}
                >
                Login
                </Button>
            </IconButton>
            <IconButton>
                <Button
                className={classes.badge}
                >
                <Badge
                badgeContent={4}
                color="secondary"
                className={""}
                >
                <ShoppingCartIcon />
                </Badge>
                Cart
                </Button>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
