import {Account} from "../../models/Account";
import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

type Props = {
  account: Account
}

export const AccountItem = ({account}: Props) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align={'center'}>
        {account.name}
      </TableCell>
      <TableCell align={'center'}>
        {account.currency} {account.amount}
      </TableCell>
      <TableCell align={'center'}>
        {account.description}
      </TableCell>
    </TableRow>
  );
};