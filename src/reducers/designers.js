import { actions } from "./actions.actions";

const designers = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setDesigner: {
      return {
        ...state,
        designers: payload,
      }
    }
    default: {
      return state;
    }
  }
}
export default designers