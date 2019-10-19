import { combineReducers } from 'redux';
import openTabs from './openTabs';
import leftNavOpen from './leftNavOpen';

export default combineReducers({
 openTabs,
 leftNavOpen
});