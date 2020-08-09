import React from "react";
import { Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import { SubCategoryItem } from "./SubCategoryItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

export const SubCategoryList = () => {
  return (
    <Grid container>
      <Grid container justify="flex-end">
        <Grid item md={3}>
          <Tooltip TransitionComponent={Zoom} title="Create new">
            <Button
              variant="contained"
              className={""}
              startIcon={<AddIcon />}
              style={{ backgroundColor: "#ff8c00", color: "#fff" }}
            >
              Create
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <List className={""}>
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
          <SubCategoryItem />
        </List>
      </Grid>
    </Grid>
  );
};
