import { combineReducers } from 'redux';
import openTabs from './openTabs';
import leftNavOpen from './leftNavOpen';
import playingTime from './playingTime';
import suggestedPlayers from './suggestedPlayers';
import averageReviewScore from './averageReviewScore';
import numberOfReviewers from './numberOfReviewers';
import complexity from './complexity';
import numberOfPlayers from './numberOfPlayers'
import categories from './categories'
import designers from './designers'
import publishers from './publishers'
import artists from './artists'
import ageRange from './ageRange'

export default combineReducers({
  openTabs,
  leftNavOpen,
  suggestedPlayers,
  playingTime,
  averageReviewScore,
  numberOfReviewers,
  complexity,
  numberOfPlayers,
  categories,
  designers,
  publishers,
  artists,
  ageRange
});