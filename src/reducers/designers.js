import { actions } from "./actions.actions";

const designers = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setDesigner: {
      return payload;
    }
    default: {
      return state;
    }
  }
}
export default designers