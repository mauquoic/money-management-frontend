import React from "react";
import {Account} from "../../models/Account";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid, makeStyles} from "@material-ui/core";

type Props = {
  account: Account
}

const useStyles = makeStyles({
  root: {
    height: "100%"
  },
  title: {
    fontSize: 14,
  },
});

export const AccountTileItem = ({account}: Props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Card className={classes.root} elevation={12}>
        <CardContent>
          <Typography color="textPrimary" gutterBottom variant="h5">
            {account.name}
          </Typography>
          <Typography color="textSecondary">
            {account.currency} {account.amount}
          </Typography>
          <Typography>
            {account.description}
          </Typography>
        </CardContent>
        {/*<CardActions>*/}
        {/*  <Button size="small">Edit</Button>*/}
        {/*</CardActions>*/}
      </Card>
    </Grid>
  )
};
