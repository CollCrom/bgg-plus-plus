import { actions } from "./actions.actions";


const categories = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setCategories: {
      return {
        ...state,
        categories: payload,
      }
    }
    default: {
      return state;
    }
  }
}
export default categories