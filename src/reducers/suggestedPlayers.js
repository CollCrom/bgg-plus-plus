import { actions } from './actions.actions'

const suggestedPlayers = (state = {}, { type, payload }) => {
  switch(type) {
    case actions.setMinSuggestedPlayer: {
      return {
        ...state,
        suggestPlayers: {
          min: payload
        }
      }
    }
    case actions.setMaxSuggestedPlayers: {
      return {
        ...state,
        suggestPlayers: {
          max: payload
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default suggestedPlayers;