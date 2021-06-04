import React from 'react';
import './App.css';
import {Account} from "./models/Account";
import AccountDisplay from "./assets/accounts/AccountDisplay";
import {Grid} from "@material-ui/core";

function App() {
  const accounts: Array<Account> = [{
    id: 1,
    amount: 320.8,
    currency: "CHF",
    name: "myNiceAccount",
    description: "Wow, this is advancing!"
  }, {
    id: 2,
    amount: 94.6,
    currency: "EUR",
    name: "eurozz",
  }, {
    id: 3,
    amount: 420,
    currency: "USD",
    name: "Dollar account",
    description: "The account of dollars I use for stock investments"
  }, {
    id: 4,
    amount: 2600,
    currency: "CHF",
    name: "Savings",
    description: "Savings account. Do NOT touch!",
  }, {
    id: 5,
    amount: 5,
    currency: "NOK",
    name: "holiday money",
  }];

  return (
    <div className="App">
      <Grid container xs={12}
            md={10}
            lg={9}
            xl={8}
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
            style={{margin: "auto"}}>
        <AccountDisplay accounts={accounts}/>
      </Grid>
    </div>
  );
}

export default App;
