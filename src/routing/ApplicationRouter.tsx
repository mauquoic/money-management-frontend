import Grid from "@mui/material/Grid";
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import AccountDisplay from "../assets/accounts/AccountDisplay";
import { StocksDisplay } from "../assets/stocks/StocksDisplay";
import { HomePage } from "../general/HomePage";
import { NotFoundPage } from "../general/NotFoundPage";
import {SmallNavBar} from "./SmallNavBar";

function ApplicationRouter() {
  return (
    <Router>
      <SmallNavBar/>
      <Grid item xs={12}
            md={10}
            lg={9}
            xl={8}
            style={{margin: "auto"}}>

        <Switch>
          <Route exact path="/"> <Redirect to="/home" />
          </Route>
          {/*<Route path="/login" component={LoginPage}/>*/}
          <Route path="/accounts" component={AccountDisplay}/>
          <Route path="/stocks" component={StocksDisplay}/>
          <Route path='/home'  component={HomePage}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </Grid>
    </Router>
  )
}

export default ApplicationRouter;