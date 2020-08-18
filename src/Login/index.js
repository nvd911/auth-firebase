import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
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
import firebase from "./../firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { classes } = props;

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (err) {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  }

  const register = () => {
    return props.history.replace("/register");
  };

  return (
    <div className={classes.main}>
      <Paper elevation={3} className={classes.paper}>
        <Avatar className={classes.orange}>
          <SportsHockeyIcon></SportsHockeyIcon>
        </Avatar>
        <Typography className={classes.text} component="h1" variant="h5">
          Sign In
        </Typography>
        <form
          action=""
          className={classes.form}
          onSubmit={(e) => e.preventDefault()}
        >
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
            onClick={login}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.btn2}
            onClick={register}
          >
            Register
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default withRouter(withStyles(styles)(Login));
