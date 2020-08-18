import React from "react";
import { withStyles } from "@material-ui/styles";
import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import firebase from "./../../firebase";
import { withRouter } from "react-router-dom";

import styles from "./styles";
// import { useStateValue } from "./../../StateProvider";

function Home(props) {
  // const [{name}, dispatch] = useStateValue();

  const { classes } = props;
  if (!firebase.currentUsername()) {
    props.history.replace("/login");
    return null;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(withStyles(styles)(Home));
