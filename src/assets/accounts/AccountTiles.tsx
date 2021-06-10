import React from "react";
import {Account} from "../../models/Account";
import {Grid} from "@material-ui/core";
import {AccountTileItem} from "./AccountTileItem";

type Props = {
  accounts: Array<Account>
}

function AccountTiledList({accounts}: Props) {

  return (
    <Grid container direction="row" spacing={2}>
      {accounts?.length > 0 ?
        accounts?.map((account: Account) =>
          <AccountTileItem key={account.id}
                           account={account}
          />
        ) :
        <div>You currently do not have any accounts. Feel free to add them now!</div>
      }
    </Grid>
  )
}

export default AccountTiledList;