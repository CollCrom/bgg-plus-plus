import { actions } from "./actions.actions";

const numberOfPlayers = (state = [], { type, payload }) => {
  switch(type) {
    case actions.setPlayers: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default numberOfPlayers;