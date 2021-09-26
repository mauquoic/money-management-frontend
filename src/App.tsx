import Grid from '@mui/material/Grid';
import React from 'react';
import './App.css';
import AccountDisplay from "./assets/accounts/AccountDisplay";
import ApplicationRouter from './routing/ApplicationRouter';
import {SmallNavBar} from "./routing/SmallNavBar";

function App() {
  return (
    <div className="App">
      <ApplicationRouter />
    </div>
  );
}

export default App;
