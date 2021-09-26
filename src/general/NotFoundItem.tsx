import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import React from "react";
import {Link} from "react-router-dom";

type Props = {
  image: any,
  title: string,
  text: string
}

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    display: 'block',
    color: 'black'
  },
});

export const NotFoundItem = ({image, title, text}: Props) => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img style={{maxHeight: "600px", maxWidth: "60%"}} src={image} alt={"Image for not found page"}/>
      </div>
      <div>
        <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
          {title}
        </Typography>
      </div>
      {<Link to="/home" className={classes.link}>{text} You can, however, go back to the homepage here.</Link>}
    </div>
  )
}