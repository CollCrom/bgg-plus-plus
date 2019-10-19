import { actions } from "./actions.actions";


const categories = (state = [], {type, payload}) => {
  switch(type) {
    case actions.setCategories: {
      return payload;
    }
    default: {
      return state;
    }
  }
}
export default categories