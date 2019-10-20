import React from 'react';
import { actions } from '../reducers/actions.actions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    width: '18vw',
    height: '400px',
    borderRadius: '6%',
    boxShadow: '0 5px 10px rgba(0,0,0,.7)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#A97522'
  },
  thumbNail: {
    marginTop: '1vh',
    width: '150px',
    height: '150px',
  },
  header: {
    fontSize: '30px',
    fontWeight: '500',
    textAlign: 'center',
    margin: '0px',
    fontFamily: 'Titillium Web, sans-serif'
  },
  bottom: {
    fontSize: '35px',
    fontWeight: '750',
    textAlign: 'center',
    margin: '0px',
    fontFamily: 'Titillium Web, sans-serif'
  },
  description: {
    fontFamily: 'Titillium Web, sans-serif',
    margin: '0px 5px',
    textAlign: 'center'
  }
}));

const InfoCard = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
        <div className={classes.card}>
          <a href='https://boardgamegeek.com/boardgame/167791/terraforming-mars' target="_blank">
            <img className={classes.thumbNail} src='https://cf.geekdo-images.com/thumb/img/yFqQ569DfL8NSTGTUw0vF9SCR7k=/fit-in/200x150/pic3536616.jpg'></img>
          </a>
          <div>
            <p className={classes.header}>TERRAFORMING</p>
            <p className={classes.bottom}>MARS</p>
            <p className={classes.description}>
              In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, 
              initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable.
            </p>
          </div>
        </div>
    </>
  )
}

export default InfoCard;