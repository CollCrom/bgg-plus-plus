import { actions } from "./actions.actions";

const publishers = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setPublishers: {
      return {
        ...state,
        publishers: payload,
      }
    }
    default: {
      return state;
    }
  }
}
export default publishers