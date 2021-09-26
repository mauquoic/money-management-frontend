import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AccountCircle} from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    borderBottomRightRadius: "10%",
    borderBottomLeftRadius: "10%",
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    color: 'black'
  },
});

export const SmallNavBar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" className={classes.root} enableColorOnDark>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}
          onClick={handleClick}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <Link to="/home" className={classes.link}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
          <Link to="/accounts" className={classes.link}><MenuItem onClick={handleClose}>Accounts</MenuItem></Link>
          <Link to="/stocks" className={classes.link}><MenuItem onClick={handleClose}>Stocks</MenuItem></Link>
        </Menu>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          My Money Management
        </Typography>
        {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
            </div>
          ) :
          <Button color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  )
}
