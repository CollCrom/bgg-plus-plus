import {actions} from './actions.actions'

const playingTime = (state = [], { type, payload }) => {
  switch(type) {
    case actions.setPlayingTime: {
      return {
        ...state,
        playingTime: payload
      }
    }
    default: {
      return state;
    }
  }
}

export default playingTime;