import { actions } from './actions.actions'

const suggestedPlayers = (state = [], { type, payload }) => {
  switch(type) {
    case actions.setSuggestedPlayer: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default suggestedPlayers;