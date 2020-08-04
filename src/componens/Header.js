import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import NavMenu from "./NavMenu";

const styles = (theme) => ({
  headerrapper: {
    // color: "#003399",
  },
});

export default withStyles(styles)(({ classes }) => (
  <Typography>
    <div className="header-wrapper">
      <NavMenu />
      <div className="header-content">
        <Typography variant="h2" gutterBottom>
          The leading online board for academic writting, and creative research.
        </Typography>
        <Typography component="span">
            Trusted by proffesionals across the globe
        </Typography>
      </div>
    </div>
  </Typography>
));
