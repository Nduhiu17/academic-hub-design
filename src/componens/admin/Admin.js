import React from "react";
import AdminLayout from "./layout/AdminLayout";
import MainContent from "./MainContent";
import { Typography } from "@material-ui/core";

export const Admin = () => {
  return (
    <Typography style={{overflow:'hidden'}}>
      <AdminLayout>
        <MainContent />
      </AdminLayout>
    </Typography>
  );
};
