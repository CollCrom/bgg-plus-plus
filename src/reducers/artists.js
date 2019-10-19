import { actions } from "./actions.actions";

const artists = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setArtists: {
      return {
        ...state,
        artists: payload,
      }
    }
    default: {
      return state;
    }
  }
}
export default artists