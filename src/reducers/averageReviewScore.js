import {actions} from './actions.actions'

const averageReviewScore = (state=0, { type, payload}) => {
  switch(type) {
    case actions.setAverageReviewScore: {
      return payload;
    }
    default: {
      return state;
    }
  }
}

export default averageReviewScore;