import React, {useEffect, useState} from "react";
import AccountTiles from "./AccountTiles";
import AccountList from "./AccountList";
import Button from "@material-ui/core/Button";
import {Account} from "../../models/Account";
import {Grid} from "@material-ui/core";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AccountService from "./AccountService";

function AccountDisplay() {
  const [view, setView] = useState("tiled");
  const [accounts, setAccounts] = useState<Array<Account>>([]);

  const handleView = (event: React.MouseEvent<HTMLElement>, view: string) => {
    setView(view);
  };

  useEffect(() => {
    AccountService.getAccounts().then((accounts: Array<Account>) => setAccounts(accounts));
  }, []);

  return (
    <Grid container>
      <Grid container justify="flex-end">
        <ToggleButtonGroup
          exclusive
          color="primary"
          aria-label="contained button group"
          value={view}
          onChange={handleView}
        >
          <ToggleButton value="list" aria-label="left aligned">
            <FontAwesomeIcon color="black" icon={['fas', 'list']}/>
          </ToggleButton>
          <ToggleButton value="tiled" aria-label="left aligned">
            <FontAwesomeIcon color="black" icon={['fas', 'th']}/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid item xs={12}>
        {view === "tiled" ?
          <AccountTiles accounts={accounts}/> :
          <AccountList accounts={accounts}/>
        }
      </Grid>
      <Grid container justify="flex-end">
        <Button size="small">Add account</Button>
      </Grid>
    </Grid>
  )
};

export default AccountDisplay;