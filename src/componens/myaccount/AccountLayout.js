import React from "react";
import { Grid, Typography, Paper, Toolbar } from "@material-ui/core";
import NavMenu from "../NavMenu";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Zoom from "@material-ui/core/Zoom";
import accountRoutes from "./accountRoutes";

const AccountLayout = (props) => {
  return (
    <Typography>
      <NavMenu />
      <Toolbar></Toolbar>
      <Grid container spacing={2}>
        <Grid item md={2} sm={6} xs={4}>
          <Paper elevation={4}>
            <List>
              {accountRoutes.map((route, index) => {
                return (
                  <Link to={route.path}>
                    <ListItem button key={route.name}>
                      <Tooltip TransitionComponent={Zoom} title={route.name}>
                        <ListItemIcon>{route.icon}</ListItemIcon>
                      </Tooltip>
                      <ListItemText primary={route.name} />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item md={10} sm={6} xs={8}>
          <Paper elevation={4}>
            <Typography paragraph>{props.children}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Typography>
  );
};

export default AccountLayout;
