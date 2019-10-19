import { actions } from "./actions.actions";


const numberOfReviewers = (state={}, { type, payload}) => {
  switch(type) {
    case actions.setNumberOfReviewers: {
      return {
        ...state,
        numberOfReviewers: payload
      }
    }
    default: {
      return state;
    }
  }
}

export default numberOfReviewers;