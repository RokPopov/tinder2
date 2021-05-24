import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import './Header.css';

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "black", opacity: 0.3}
  }
}));

function Header() {
  const classes = useStyles();


  return (
    <div className="header">
      <IconButton className={classes.customHoverFocus} >
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
      className="header__logo"
      src="https://1000logos.net/wp-content/uploads/2018/07/tinder-app-logo.jpg"
      alt="red tinder logo"
      />
      <IconButton className={classes.customHoverFocus} >
        <QuestionAnswerIcon className="header__icon"  fontSize="large" />
      </IconButton>
    </div>
  )
}


export default Header;