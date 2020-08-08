import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
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

const PaginationComponent = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCategoryChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={4}>
          <FormControl className={classes.margin} fullWidth>
            <TextField
              id="filled-search"
              label="Search keyword"
              type="search"
              variant="filled"
            />
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={4}>
          <FormControl className={classes.formControl} fullWidth>
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
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={4}>
          <FormControl className={classes.formControl} fullWidth>
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
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={4}>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            disableElevation
          >
            Search
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}></Grid>

      <Grid item xs={12} md={5}>
        <Paper className={classes.paper} elevation={4}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            fullWidth
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default PaginationComponent;
