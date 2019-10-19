import React from 'react';
import { actions } from '../reducers/actions.actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  redCard: {
    width: '18vw',
    height: '400px',
    border: '1px solid black',
    borderRadius: '6%',
    boxShadow: '0 5px 10px rgba(0,0,0,.7)'
  }
}));

const InfoCard = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <div className={classes.redCard}>
        GAME INFO
      </div>
    </div>
  )
}

export default InfoCard;