import React, { useState } from "react";
import firebase from "./../firebase";
import { withStyles } from "@material-ui/styles";
import SportsHockeyIcon from "@material-ui/icons/SportsHockey";
import {
  FormControl,
  InputLabel,
  Input,
  Avatar,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";

import styles from "./styles";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { classes } = props;
  async function register() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/login");
    } catch (err) {
      alert("Vui lòng nhập đầy đủ thông tin và đúng đinh dạng email");
    }
  }

  const goToBackLogin = () => {
    props.history.replace("/login");
  };
  return (
    <div className={classes.main}>
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.orange}>
          <SportsHockeyIcon></SportsHockeyIcon>
        </Avatar>
        <Typography className={classes.text} component="h1" variant="h5">
          Register
        </Typography>
        <form
          action=""
          className={classes.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl className={classes.frmControl}>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.frmControl}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.frmControl}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            className={classes.btn1}
            onClick={register}
          >
            Register
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.btn2}
            onClick={goToBackLogin}
          >
            Go to back Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default withRouter(withStyles(styles)(Register));
