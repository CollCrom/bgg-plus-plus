import {actions} from './actions.actions'

const playingTimeReducer = (state=[], { type, payload }) => {
  switch(type) {
    case actions.setPlayingTime: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default playingTimeReducer;