import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CommonContext } from "./context/CommonContext";

import NotFound from "./pages/NotFound";
import VoteMain from "./pages/VoteMain";
import Main from "./pages/Main";
import Auth from "./pages/auth/auth-go";
import Register from "./pages/auth/auth-register";
import Order from "./pages/customer/kiosk-order";
<<<<<<< HEAD

// import BugerList from "./components/BugerList";

=======
<<<<<<< web/src/App.js
import wBoard from "./pages/waitingboard/wMain";
=======
>>>>>>> 7e6bc6d37aa2dfee4518a95ff04ffc1aaf4d3a46
import TestDB from "./pages/test/test1_db";
>>>>>>> web/src/App.js

import "./index.css";

const theme = createMuiTheme({
  drawerWidth: 320,
  typography: {
    fontFamily: ["Noto Sans KR"].join(","),
    button: {
      fontFamily: "Noto Sans KR"
    },
    body1: {
      fontWeight: 500
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white"
        }
      }
    }
  }
});

const App = () => {
  return (
    <CommonContext.Provider value={{}}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Main" component={Main} />
            <Route path="/Auth" component={Auth} />
            <Route path="/Register" component={Register} />
            <Route path="/Order" component={Order} />

            <Route path="/wBoard" component={wBoard} />

            <Route path="/TestDB" component={TestDB} />

            <Route path="/not-found" component={NotFound} />

            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </CommonContext.Provider>
  );
};

export default App;
