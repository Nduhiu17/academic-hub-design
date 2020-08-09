import React from "react";
import { Typography } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const SubCategoryItem = () => {
  const classes = useStyles();
  return (
    <Typography>
      <ListItem className={classes.ListItem}>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography style={{ display: "flex" }}>
            <ListItemAvatar>
              <Avatar>
                <GroupWorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Computer Science" secondary="Jan 9, 2014" />
          </Typography>
          <Typography>
            <Tooltip TransitionComponent={Zoom} title="Delete category">
              <DeleteIcon style={{ marginRight: 12, color: "red" }} />
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Edit category">
              <EditIcon style={{ marginRight: 12, color: "green" }} />
            </Tooltip>
          </Typography>
        </Grid>
      </ListItem>
    </Typography>
  );
};
