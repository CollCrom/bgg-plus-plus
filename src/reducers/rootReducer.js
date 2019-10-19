import { combineReducers } from 'redux';
import openTabs from './openTabs';
import leftNavOpen from './leftNavOpen';
import playingTimeReducer from './playingTime';

export default combineReducers({
  openTabs,
  leftNavOpen,
  playingTimeReducer,
  averageReviewScore,
  numberOfReviewers,
});