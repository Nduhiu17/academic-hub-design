import React from "react";
import { Paper, Grid, Typography, Toolbar, Divider } from "@material-ui/core";
import wordImg from "../assets/images/download.png";
import Link from "@material-ui/core/Link";

import Accordion from "@material-ui/core/Accordion";
import Button from "@material-ui/core/Button";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const File = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography>
      <Paper elevation={4}>
        <Grid container spacing={2}>
          <Grid item md={1}>
            <img
              src={wordImg}
              alt=""
              style={{ width: "100%" }}
              className="file-image"
            />
          </Grid>
          <Grid item md={9}>
            <Typography
              style={{
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: 1.2,
                color: "#2F4F4F",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              lobortis gravida tempus. Etiam et aliquam magna. Nulla a sem sit
              amet justo maximus ullamcorper a in nulla.
            </Typography>
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
          </Grid>
          <Grid item md={2} sm={12} className="price-add-to-cart">
            <Typography>
              <Button variant="fab" large style={{ color: "#ff8c00" }}>
                <AttachMoneyIcon fontSize="large" />
                5.00
              </Button>
            </Typography>
            <Divider />
            <Typography>
              <Tooltip TransitionComponent={Zoom} title="Add to cart">
                <Button variant="fab" large style={{ color: "#ff8c00" }}>
                  <AddShoppingCartIcon fontSize="large" />
                  Add to Cart
                </Button>
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Toolbar></Toolbar>
    </Typography>
  );
};

export default File;
