import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import InfoCard from './infoCard'
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    float: 'right',
    width: '100%',
    backgroundColor:'#DFDAC1',
    color: '#513A25'
  },
  card: {
    margin: '10px',
    padding: '0px',
  }
}));

const InfoCardContainer = ({leftNavOpen}) => {
  console.log(leftNavOpen)
  const classes = useStyles();
  const infoCards = []
  for(let i = 0; i < 10; i++) {
    infoCards.push(
      <ul className={classes.card} key={'infoCardContainer'}>
        <InfoCard/>
      </ul>
    )
  }
  return (
    <div className={classes.flexContainer}> 
      <CssBaseline />
      {infoCards}
    </div>
  )
}

const enhance = compose(
  connect(({leftNavOpen}) => ({leftNavOpen}))
)

export default enhance(InfoCardContainer);