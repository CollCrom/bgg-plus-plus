import {actions} from './actions.actions'

const averageReviewScore = (state={}, { type, payload}) => {
  switch(type) {
    case actions.setAverageReviewScore: {
      return {
        ...state,
        averageReviewScore: payload
      }
    }
    default: {
      return state;
    }
  }
}

export default averageReviewScore;