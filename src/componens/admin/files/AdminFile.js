import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: 20,
  },
}));

const AdminFile = () => {
  const classes = useStyles();

  return (
    <Typography gutterBottom>
      <Paper className={classes.Paper}>
        <Grid container>
          <Grid item md={10}>
            <Typography md={12}>
              Easily generate Lorem Ipsum placeholder text in any number of
              characters, words sentences or paragraphs. Learn about the origins
              of the passage and its .
            </Typography>
            <Typography md={12}>
              <div className={""}>
                <Accordion
                  square
                  style={{ border: "none !important", boxShadow: "none" }}
                >
                  <AccordionSummary expandIcon={""} id="panel1a-header">
                    <Link className={""} style={{ color: "#617482" }}>
                      View Details
                    </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Typography>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Paper>
    </Typography>
  );
};

export default AdminFile;
