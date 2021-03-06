import React, { useState } from "react";
import AdminFile from "./AdminFile";
import AdminLayout from "../AdminLayout";
import PaginationComponent from "../../../shared/PaginationComponent";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import { CustomDialog } from "../../../shared/CustomModal";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { FileForm } from "./FileForm";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const handleDialogOpen = () => {
    setIsOpen(true);
  };
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
            <Button
              style={{
                backgroundColor: "#ff8c00",
                color: "#fff",
              }}
              onClick={handleDialogOpen}
            >
              <CloudUploadIcon style={{ marginRight: 12 }} />
              Upload File
            </Button>
          </Typography>
        </Paper>
      </Grid>

      <AdminFile />
      <AdminFile />
      <AdminFile />
      <AdminFile />
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Upload file"
      >
        <FileForm />
      </CustomDialog>
    </AdminLayout>
  );
};

export default AdminFileList;
