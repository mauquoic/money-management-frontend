import {Account} from "../../models/Account";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from "react";

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