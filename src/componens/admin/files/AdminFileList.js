import React from "react";
import AdminFile from "./AdminFile";
import AdminLayout from "../AdminLayout";
import PaginationComponent from "../../../shared/PaginationComponent";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    create: {
      marginTop: 15,
      marginBottom: 20,
    },
  })
);

const AdminFileList = () => {
  const classes = useStyles();
  return (
    <AdminLayout>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <PaginationComponent />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        justify="flex-end"
        className={classes.create}
      >
        <Paper elevation={4}>
          <Typography>
            <Button style={{ backgroundColor: "#ff8c00", color: "#fff" }}>
              Upload File
            </Button>
          </Typography>
        </Paper>
      </Grid>

      <AdminFile />
      <AdminFile />
      <AdminFile />
      <AdminFile />
    </AdminLayout>
  );
};

export default AdminFileList;
