import React, {useEffect, useState} from "react";
import {Account} from "../../models/Account";
import {AccountItem} from "./AccountItem";
import classes from "./AccountList.module.css";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";

type Props = {
  accounts: Array<Account>
}

function AccountTableList({accounts}: Props) {

  return (
    <div className={classes.root}>
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
              {accounts?.map((account) => {
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