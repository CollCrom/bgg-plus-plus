import { actions } from "./actions.actions";

const numberOfPlayers = (state = [], { type, payload }) => {
  switch(type) {
    case actions.setPlayers: {
      return {
        ...state,
        numberOfPlayers: payload
      }
    }
    default: {
      return state;
    }
  }
}

export default numberOfPlayers;