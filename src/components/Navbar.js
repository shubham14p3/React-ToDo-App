import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
              Active
            </FilterLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
              Completed
            </FilterLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
