import React from "react";
import { Grid, CardHeader } from "@material-ui/core";
import List from "@material-ui/core/List";
import { CategoryItem } from "./CategoryItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

export const CategoryList = ({headTitle}) => {
  return (
    <Grid container>
      <Grid container style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Grid item md={6}>
          <CardHeader title={headTitle}/>
        </Grid>
        <Grid item md={3}>
        </Grid>
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
      <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <List className={""}>
          <CategoryItem title="Computer Science" subtitle="Jan 9, 2014111" />
          <CategoryItem title="Computer Science" subtitle="Jan 9, 2014111" />
          <CategoryItem title="Computer Science" subtitle="Jan 9, 2014111" />
          <CategoryItem title="Computer Science" subtitle="Jan 9, 2014111" />
        </List>
      </Grid>
      </Grid>
    </Grid>
  );
};
