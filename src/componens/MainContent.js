import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Grid, Toolbar } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { SearchSharp } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    background: "transparent",
    padding: 14,
    fontWeight: 600,
    color: "#ff8c00",
  },
}));

const MainContent = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleCategoryChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setAge(event.target.value);
  };

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.margin}>
              <TextField
                id="standard-helperText"
                defaultValue="Keyword"
                helperText="Search by keyword"
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleCategoryChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Medical</MenuItem>
                <MenuItem value={20}>Engineering</MenuItem>
                <MenuItem value={30}>Procurement</MenuItem>
              </Select>
              <FormHelperText>Select category</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Subcategory
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleSubcategoryChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Medical</MenuItem>
                <MenuItem value={20}>Engineering</MenuItem>
                <MenuItem value={30}>Procurement</MenuItem>
              </Select>
              <FormHelperText>Select sub-category</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="inherit"
              size="large"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
              fullWidth
              disableElevation
            >
              Search
            </Button>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <Container>
      <Paper style={{ marginTop: -50 }} className="container">
        <Toolbar></Toolbar>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Container>
  );
};

export default MainContent;
