import { actions } from "./actions.actions";

const complexity = (state = [], { type, payload}) => {
  switch(type) {
    case actions.setComplexity: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default complexity