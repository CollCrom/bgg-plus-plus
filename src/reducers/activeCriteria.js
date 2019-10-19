import { actions } from "./actions.actions";


const activeCriteria = (state = {}, { type, payload}) => {
  switch(type) {
    case actions.setCriteria: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state;
    }
  }
};

export default activeCriteria;