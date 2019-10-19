import { actions } from "./actions.actions";


export const ageRange =(state = [], { type, payload}) => {
  switch(type) {
    case actions.setAgeRange: {
      return payload;
    }
    default: {
      return state
    }
  }
}

export default ageRange