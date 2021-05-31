import React from "react";
import {Account} from "../../models/Account";
import {AccountItem} from "./AccountItem";
import classes from "./AccountList.module.css";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

function AccountTableList() {
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
  }];

  return (
    <div>
      <Paper elevation={6} className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align={'center'}>
                  Name
                </TableCell>
                <TableCell align={'center'}>
                  Value
                </TableCell>
                <TableCell align={'center'}>
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => {
                return (
                  <AccountItem key={account.id} account={account}/>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default AccountTableList;