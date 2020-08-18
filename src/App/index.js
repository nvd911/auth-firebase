import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import theme from "./../conmons/Theme";
import firebase from "./../firebase";
import Login from "./../Login";
import Register from "./../Register";
import Home from "./../Page/Home";
import { StateProvider } from "./../StateProvider";
import reducer, { initialState } from "./../reducer";

function App() {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    firebase.isInitialCheck().then((user) => {
      setCheck(user);
    });
  });
  return (
    check !== false && (
      <StateProvider reducer={reducer} initialState={initialState}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </StateProvider>
    )
  );
}

export default App;
