import React from 'react';
import './App.css';
import AccountDisplay from "./assets/accounts/AccountDisplay";
import {Grid} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Grid item xs={12}
            md={10}
            lg={9}
            xl={8}
            style={{margin: "auto"}}>
        <AccountDisplay/>
      </Grid>
    </div>
  );
}

export default App;
